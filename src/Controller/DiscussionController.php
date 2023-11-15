<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Carbon\Carbon;
use Laminas\Diactoros\Response\JsonResponse;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use Flarum\Http\UrlGenerator;
use Flarum\Tags\Tag;
use Flarum\User\User;
use Sidtechno\Customlogin\Model\Posts;
use Sidtechno\Customlogin\Model\WikiCategory;
use Illuminate\Support\Str;
use Sidtechno\Customlogin\Model\Discussions;
use Sidtechno\Customlogin\Model\Like;
use Flarum\Tags\Access\DiscussionPolicy;
use Flarum\Notification\Notification;
use Flarum\Discussion\Discussion;
use Flarum\Post\Post;
use Flarum\Post\CommentPost;
use Flarum\User\AssertPermissionTrait;
class DiscussionController implements RequestHandlerInterface
{

    private $discussionPolicy;

    public function __construct(DiscussionPolicy $discussionPolicy)
    {
        $this->discussionPolicy = $discussionPolicy;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $method = $request->getMethod();
        $actor = $request->getAttribute('actor');

        switch ($method) {
            case 'GET':
                if(isset($request->getAttribute('routeParameters')['slug'])) {
                    $slug = $request->getAttribute('routeParameters')['slug'];
                    if ($slug) {
                        return $this->show($slug, $request);
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
                return $this->delete($id,$request);

            default:
                return new JsonResponse(['message' => 'Method not allowed'], 405);
        }
    }


    public function show($slug, ServerRequestInterface $request)
    {
        $actor = $request->getAttribute('actor');
        $userId = $actor->id ?? null;

        $parts = explode('-', $slug, 2);  // split into 2 parts at most
        $responseMessage = '';

        if (isset($parts[0]) && is_numeric($parts[0])) {
            $number = intval($parts[0]);
            $responseMessage = $number;  // Set the message to the number
        } else {
            $responseMessage = "No number found in the slug";
        }



        $post = Discussions::select('discussions.title','discussions.id','discussions.user_id', 'posts.id as post_id','posts.content')
        ->leftJoin('posts', 'discussions.id', '=', 'posts.discussion_id')
        ->where('posts.number', '<=', 1)
        ->where('discussions.id', $number)
        ->with('tags.name','user')
        ->withCount('likes')
        ->first();

        if(isset($actor->id) && Like::where('post_id',$post->post_id)->where('user_id',$actor->id)){
        $post->like = true;
        }else{
            $post->like = false;
        }

        $discussion = Discussion::find($number);

        if($actor->can('reply', $discussion)) {
            $post->canReply = true;
        } else {
            $post->canReply = false;
        }
        if($actor->can('delete', $discussion)){
        $post->canDelete = true;
        }else{
            $post->canDelete = false;
        }

        // if($actor->can('canEdit', $discussion)){
        //  $post->canEdit = true;
        // }else{
        // $post->canEdit = false;
        //  }
        $posts = Post::find($discussion->first_post_id);
        $post->canLike = $actor->can('like', $posts);
        $post->canEdit = $actor->can('edit', $posts);
        if(isset($request->getQueryParams()['sort'])){
            $sort = $request->getQueryParams()['sort'];
        }

        $userId = $actor->id ?? null;
        if(isset($sort) && $sort === 'latest') {
            $comment = Posts::where('discussion_id',$number)->where('hidden_user_id',null)
            ->where('type','comment')
            ->where('number', '>', 1)
            ->with([
                'user',
                'replies' => function($query) {
                    $query->withCount(['likesRelation', 'dislikesRelation']);
                },
                'replies.user'
            ])
            ->withCount('likesRelation', 'dislikesRelation')
            ->orderBy('created_at', 'desc')
            ->get()->each(function ($comment) use ($userId) {
                $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
                $comment->edit = $comment->user_id === $userId;
                $comment->delete = $comment->edit;
                if(Like::where('post_id', $comment->id)->where('user_id',$userId)->first()){
                    $comment->like = true;
                } else {
                    $comment->like = false;
                }
                foreach($comment->replies as $reply) {
                    $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;

                     $reply->can_edit = $reply->user_id === $userId;
                     $reply->can_delete = $reply->can_edit;
                }
            });

        }elseif(isset($sort) && $sort === 'oldest'){

            $comment = Posts::where('discussion_id',$number)->where('hidden_user_id',null)
            ->where('type','comment')
            ->where('number', '>', 1)
            ->with([
                'user',
                'replies' => function($query) {
                    $query->withCount(['likesRelation', 'dislikesRelation']);
                },
                'replies.user'
            ])
            ->withCount('likesRelation', 'dislikesRelation')
            ->orderBy('created_at', 'asc')
            ->get()->each(function ($comment) use ($userId) {
                $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
                $comment->edit = $comment->user_id === $userId;
                $comment->delete = $comment->edit;
                if(Like::where('post_id', $comment->id)->where('user_id',$userId)->first()){
                    $comment->like = true;
                } else {
                    $comment->like = false;
                }
                foreach($comment->replies as $reply) {
                    $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;

                     $reply->can_edit = $reply->user_id === $userId;
                     $reply->can_delete = $reply->can_edit;
                }
            });

        }elseif(isset($sort) && $sort === 'like'){
            $comment = Posts::where('discussion_id',$number)->where('hidden_user_id',null)
            ->where('type','comment')
            ->where('number', '>', 1)
            ->with([
                'user',
                'replies' => function($query) {
                    $query->withCount(['likesRelation', 'dislikesRelation']);
                },
                'replies.user'
            ])
            ->withCount('likesRelation', 'dislikesRelation')
            ->orderBy('likes_relation_count', 'desc')
            ->get()->each(function ($comment) use ($userId) {
                $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
                $comment->edit = $comment->user_id === $userId;
                $comment->delete = $comment->edit;
                if(Like::where('post_id', $comment->id)->where('user_id',$userId)->first()){
                    $comment->like = true;
                } else {
                    $comment->like = false;
                }
                foreach($comment->replies as $reply) {
                    $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;

                     $reply->can_edit = $reply->user_id === $userId;
                     $reply->can_delete = $reply->can_edit;
                }
            });

        }else{

        $comment = Posts::where('discussion_id',$number)->where('hidden_user_id',null)
        ->where('type','comment')
        ->where('number', '>', 1)
        ->with([
            'user',
            'replies' => function($query) {
                $query->withCount(['likesRelation', 'dislikesRelation']);
            },
            'replies.user'
        ])
        ->withCount('likesRelation', 'dislikesRelation')
        ->get()->each(function ($comment) use ($userId) {
            $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
            $comment->edit = $comment->user_id === $userId;
            $comment->delete = $comment->edit;
            if(Like::where('post_id', $comment->id)->where('user_id',$userId)->first()){
                $comment->like = true;
            } else {
                $comment->like = false;
            }
            foreach($comment->replies as $reply) {
                $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;

                 $reply->can_edit = $reply->user_id === $userId;
                 $reply->can_delete = $reply->can_edit;
            }
        });
}

        $data['post'] = $post;
        $data['comment'] = $comment;

        return new JsonResponse(['message' => $responseMessage, 'data' => $data], 200);
    }


    public function create(ServerRequestInterface $request){

        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }
        $data =  $parsedBody = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'post_id'   => 'required',
            'content'   => 'required',
        ]);
        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 422);
        }
        $latestPostNumber = Posts::where('discussion_id',  $data['post_id'])
        ->max('number');

    $newPostNumber = $latestPostNumber + 1;

        $post = new Posts();
        $post->discussion_id = $data['post_id'];
        $post->content = $data['content'];
        $post->type = 'comment';
        $post->user_id = $actor->id;
        $post->number = $newPostNumber;
        $post->created_at = Carbon::now();
        $post->save();
        // $this->notification($actor,$post);
        $ch_participant =  Posts::where('discussion_id',  $data['post_id'])->where('user_id', $actor->id)->first();

        $discussions = Discussions::where('id',$data['post_id'])->first();
        if($discussions){
            $discussions->comment_count += 1;
            if(empty($ch_participant)){
                $discussions->participant_count += 1;
            }
            $discussions->save();
        }

        $userId = $actor->id ?? null;

        $comment = Posts::where('id',$post->id)->where('hidden_user_id',null)
        ->where('type','comment')
        ->with([
            'user',
            'replies' => function($query) {
                $query->withCount(['likesRelation', 'dislikesRelation']);
            },
            'replies.user'
        ])
        ->withCount('likesRelation', 'dislikesRelation')
        ->get()->each(function ($comment) use ($userId) {
            $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
            $comment->edit = $comment->user_id === $userId;
            $comment->delete = $comment->edit;
            if(Like::where('post_id', $comment->id)->where('user_id',$userId)->first()){
                $comment->like = true;
            } else {
                $comment->like = false;
            }
            foreach($comment->replies as $reply) {
                $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;

                 $reply->can_edit = $reply->user_id === $userId;
                 $reply->can_delete = $reply->can_edit;
            }
        });

        return new JsonResponse(['message' => 'Comment create successfully', 'data' => $comment], 200);

    }
    public function update($id, ServerRequestInterface $request){

        $data = $request->getParsedBody();
        $actor = $request->getAttribute('actor');
        $userId = $actor->id ?? null;

        $posts = Posts::find($id);
        if (!$posts) {
            return new JsonResponse(['message' => 'Discussion not found'], 404);
        }
        $posts->content = $data['content'];
        $posts->save();

        $comment = Posts::where('id',$posts->id)
        ->with([
            'user',
            'replies' => function($query) {
                $query->withCount(['likesRelation', 'dislikesRelation']);
            },
            'replies.user'
        ])
        ->withCount('likesRelation', 'dislikesRelation')
        ->get()->each(function ($comment) use ($userId) {
            $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
            $comment->edit = $comment->user_id === $userId;
            $comment->delete = $comment->edit;
            if(Like::where('post_id', $comment->id)->where('user_id',$userId)->first()){
                $comment->like = true;
            } else {
                $comment->like = false;
            }
            foreach($comment->replies as $reply) {
                $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;

                 $reply->can_edit = $reply->user_id === $userId;
                 $reply->can_delete = $reply->can_edit;
            }
        });


        return new JsonResponse(['message' => 'Comment updated successfully', 'data' => $comment], 200);
    }

    public function delete($id,ServerRequestInterface $request){
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $comment = Post::find($id);
        $comment->delete();
        return new JsonResponse(['message' => true, 'data' => 'Comment deleted successfully.'], 200);
    }

    public function notification($actor,$post){

        $notification = New Notification();
        $notification->user_id = $post->user_id;
        $notification->from_user_id = $actor->id;
        $notification->type = 'postLiked';
        $notification->subject_id = $post->id;
        $notification->save();

    }

}
