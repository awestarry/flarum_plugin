<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\WikiPost;
use Sidtechno\Customlogin\Model\WikiCategory;
use Illuminate\Support\Str;
use Sidtechno\Customlogin\Model\Wikilike;
use Sidtechno\Customlogin\Model\WikiComment;
use Sidtechno\Customlogin\Model\WikiReplyComment;
use Sidtechno\Customlogin\Model\WikiCommentLike;
use Sidtechno\Customlogin\Model\WikiReplyCommentLike;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\CommunityPermission;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\PointRule;
class WikiPostController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $method = $request->getMethod();
        $actor = $request->getAttribute('actor');

        switch ($method) {
            case 'GET':
                if(isset($request->getAttribute('routeParameters')['slug'])) {
                    $slug = $request->getAttribute('routeParameters')['slug'];
                    if ($slug) {
                        return $this->show($slug,$actor,$request);
                    }
                }
                return $this->index($actor);

            case 'POST':
                return $this->create($request);

            case 'PUT':

                $id = $request->getAttribute('routeParameters')['id'];
                return $this->update($id, $request);

            case 'DELETE':
                $id =  $request->getAttribute('routeParameters')['id'];
                return $this->delete($id);

            default:
                return new JsonResponse(['message' => 'Method not allowed'], 405);
        }
    }

    public function index($actor)
    {
        $category = WikiCategory::with(['post' => function ($query) {
            $query->select('id', 'title', 'slug', 'category_id','user_id');
        }])->get();

            foreach ($category as $cat) {
                foreach ($cat->post as $post) {
                    if (isset($actor->id) && $post->user_id == $actor->id) {
                        $post->edit = true;
                        $post->delete = true;
                    } else {
                        $post->edit = false;
                        $post->delete = false;
                    }
                }
            }


        return new JsonResponse(['data' => $category], 200);
    }

    public function show($slug, $actor,ServerRequestInterface $request)
    {
        $post = WikiPost::where('slug', $slug)->with('user')->first();

        if (!$post) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }
        $cate =  WikiCategory::find($post->category_id);
        $post->category  = $cate->name ??'';

        if(isset($actor->id) && $post->user_id == $actor->id){
            $post->edit = true;
            $post->delete = true;
        }else{
            $post->edit = false;
            $post->delete = false;
        }
        if(isset($request->getQueryParams()['sort'])){
            $sort = $request->getQueryParams()['sort'];
        }

        $userId = $actor->id ?? null;
        if(isset($sort) && $sort === 'latest') {
            $Comments  = WikiComment::where('post_id', $post->id)
            ->with([
                'user',
                'replies' => function($query) {
                    $query->withCount(['likesRelation', 'dislikesRelation']);
                },
                'replies.user'
            ])
            ->withCount('likesRelation', 'dislikesRelation')
            ->orderBy('created_at', 'desc')
            ->get()
            ->each(function ($comment) use ($userId) {
                $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
                $comment->edit = $comment->user_id === $userId;
                $comment->delete = $comment->edit;
                foreach($comment->replies as $reply) {
                    $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;
                    $reply->can_edit = $reply->user_id === $userId;
                    $reply->can_delete = $reply->can_edit;

                    if(WikiReplyCommentLike::where('comment_id', $reply->id)->where('user_id', $userId)->first()) {
                        $reply->like = true;
                    } else {
                        $reply->like = false;
                    }
                }
            });
        } elseif (isset($sort) && $sort === 'like') {
            $Comments  = WikiComment::where('post_id', $post->id)
            ->with([
                'user',
                'replies' => function($query) {
                    $query->withCount(['likesRelation', 'dislikesRelation']);
                },
                'replies.user'
            ])
            ->withCount('likesRelation', 'dislikesRelation')
            ->orderBy('likes_relation_count', 'desc')
            ->get()
            ->each(function ($comment) use ($userId) {
                $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
                $comment->edit = $comment->user_id === $userId;
                $comment->delete = $comment->edit;
                foreach($comment->replies as $reply) {
                    $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;
                    $reply->can_edit = $reply->user_id === $userId;
                    $reply->can_delete = $reply->can_edit;

                    if(WikiReplyCommentLike::where('comment_id', $reply->id)->where('user_id', $userId)->first()) {
                        $reply->like = true;
                    } else {
                        $reply->like = false;
                    }
                }
            });
        } elseif (isset($sort) && $sort === 'oldest') {
            $Comments = WikiComment::where('post_id', $post->id)
            ->with([
                'user',
                'replies' => function($query) {
                    $query->withCount(['likesRelation', 'dislikesRelation']);
                },
                'replies.user'
            ])
            ->withCount('likesRelation', 'dislikesRelation')
            ->orderBy('created_at', 'asc')
            ->get()
            ->each(function ($comment) use ($userId) {
                $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
                $comment->edit = $comment->user_id === $userId;
                $comment->delete = $comment->edit;

                // Iterate over replies to set user reactions for each reply
                foreach($comment->replies as $reply) {
                    $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;
                    $reply->can_edit = $reply->user_id === $userId;
                    $reply->can_delete = $reply->can_edit;

                    if(WikiReplyCommentLike::where('comment_id', $reply->id)->where('user_id', $userId)->first()) {
                        $reply->like = true;
                    } else {
                        $reply->like = false;
                    }
                }
            });

        } else {
            $Comments = WikiComment::where('post_id', $post->id)
            ->with([
                'user',
                'replies' => function($query) {
                    $query->withCount(['likesRelation', 'dislikesRelation'])
                  ->orderByRaw('likes_relation_count  DESC');
                },
                'replies.user'
            ])
            ->withCount('likesRelation', 'dislikesRelation')
            ->get()
            ->each(function ($comment) use ($userId) {
                $comment->netLikes = $comment->likes_relation_count - $comment->dislikes_relation_count;
                $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
                $comment->edit = $comment->user_id === $userId;
                $comment->delete = $comment->edit;
                foreach($comment->replies as $reply) {
                    $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;
                    $reply->can_edit = $reply->user_id === $userId;
                    $reply->can_delete = $reply->can_edit;
                    if(WikiReplyCommentLike::where('comment_id', $reply->id)->where('user_id', $userId)->first()) {
                        $reply->like = true;
                    } else {
                        $reply->like = false;
                    }
                }
            });

        }

            if($Comments) {
                foreach ($Comments as $comment) {
                    if(isset($actor->id) && WikiCommentLike::where('comment_id', $comment->id)->where('user_id', $actor->id)->first()) {
                        $comment->like = true;
                    } else {
                        $comment->like = false;
                    }
                }
            }
        $post->like = false;
        if ($actor->id) {
            $like = Wikilike::where('wiki_articles_id', $post->id)
                ->where('user_id', $actor->id)
                ->where('reaction_type', '0')
                ->first();

            if ($like) {
                $post->like = true;
            }
        }
        $tottallike = Wikilike::where('wiki_articles_id',$post->id)->where('reaction_type',0)->count();
        $Commentco = WikiComment::where('post_id', $post->id)->count();
        $WikiReplyComment = WikiReplyComment::where('post_id',$post->id)->count();

        $post->totalLike = $tottallike;
        $post->Post_tottal_comment = $Commentco + $WikiReplyComment;
        $data['post'] = $post;
        $data['comment'] = $Comments;
        return new JsonResponse(['data' => $data], 200);
    }


    public function create(ServerRequestInterface $request)
    {
        $data = $request->getParsedBody();
        $actor = $request->getAttribute('actor');

        if (empty($actor->id)) {
            return new JsonResponse([
                'message' => 'User not logged in',
                'errors' => [],
            ], 401);
        }

        $validator = app('validator')->make($data, [
            'title'         => 'required',
            'content'       => 'required',
            'category_id'   => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }
        // cheak user have permission or points to create this post
        $check_points = UserPoint::where('user_id', $actor->id)->first();
        $permission = CommunityPermission::where('permission', 'creating_wikis_and_wiki_categories')->first();

        // Check if permission exists and if the reputation requirement is not set to 0 or null
        if ($permission && $permission->reputation_requirement !== 0 && $permission->reputation_requirement !== null) {
            // If the user doesn't have enough points, return an error
            if ($check_points->current_point <= $permission->reputation_requirement) {
                return new JsonResponse([
                    'message' => 'Points Error',
                    'errors' => 'You need at least ' . $permission->reputation_requirement . ' points to create a wiki post.',
                ], 422);
            }
        }

        // Continue with the wiki post creation process

        $data['user_id'] = $actor->id;
        $data['slug'] = Str::slug($data['title']);
        $category = WikiCategory::firstOrCreate(['name' => $data['category_id']]);

        try {

          $wiki =  WikiPost::create([
                'title'         => $data['title'],
                'content'       => $data['content'],
                // 'slug'          => $data['slug'],
                'category_id'   =>  $category->id,
                // 'subcategory_id' => $data['subcategory_id'],
                'user_id'       => $actor->id
            ]);
            $wiki->slug = $wiki->id.'-'.$data['slug'];
            $wiki->save();
            $this->addpoints($actor->id,$wiki->id);

            return new JsonResponse(['data' => $wiki->toArray()], 201);
        } catch (\Exception $e) {
            return new JsonResponse([
                'message' => 'Error creating post',
                'errors' => [$e->getMessage()],
            ], 500);
        }
    }

    public function update($id, ServerRequestInterface $request)
    {
        $post = WikiPost::find($id);
        if (!$post) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }
        $data = $request->getParsedBody();
        $category = WikiCategory::firstOrCreate(['name' => $data['category_id']]);

        $post->title = $data['title'];
        $post->content = $data['content'];
        $post->category_id =  $category->id;
        $post->save();
        return new JsonResponse(['data' => $category->toArray()], 200);
    }

    public function delete($id)
    {
        $category = WikiPost::find($id);
        if (!$category) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }
        $category->delete();
        return new JsonResponse(['message' => 'Deleted successfully'], 200);
    }

    public function addpoints($id,$post){
        $points = PointRule::where('condition','created_wiki')->first();

        if($points) {
            Points::create([
                'user_id' => $id,
                'condition' => 'created_wiki',
                'points' => $points->score,
                'post_id' => $post,
                'wiki' => 1,
                'discussion_id' => $post,
            ]);

            $user = UserPoint::where('user_id', $id)->first();
            if (empty($user)) {
                $user = new UserPoint();
                $user->user_id = $id;
                $user->current_point = 0;  // Initialize points to 0
            }
            $user->current_point += $points->score; // Increment the points
            $user->save();
        }
    }
}
