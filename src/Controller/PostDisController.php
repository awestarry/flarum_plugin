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
use Flarum\Discussion\Discussion;
use Flarum\Post\Post;
use Flarum\Post\CommentPost;
use Flarum\User\AssertPermissionTrait;
class PostDisController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $method = $request->getMethod();
        $actor = $request->getAttribute('actor');

        switch ($method) {
            case 'GET':
                if(isset($request->getAttribute('routeParameters')['id'])) {
                    $id = $request->getAttribute('routeParameters')['id'];
                    if ($id) {
                        return $this->show($id,$actor,$request);
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

    public function show($id, $actor,ServerRequestInterface $request)
    {

        $post = Discussions::select('discussions.id', 'posts.id as post_id','posts.content')
        ->leftJoin('posts', 'discussions.id', '=', 'posts.discussion_id')
        ->where('posts.number', '<=', 1)
        ->where('discussions.id', $id)
        ->first();
        return new JsonResponse(['data' => $post->toArray()], 200);
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
        if (!$check_points) {
            return new JsonResponse([
                'message' => 'Points Error',
                'errors' => 'You need at least 100 points to create a wiki post.',
            ], 422);
        }

        $permission = CommunityPermission::where('permission', 'creating_wikis_and_wiki_categories')->first();
        if ($permission && $check_points->current_point <= $permission->reputation_requirement) {
            return new JsonResponse([
                'message' => 'Points Error',
                'errors' => 'You need at least ' . $permission->reputation_requirement . ' points to create a wiki post.',
            ], 422);
        }
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
        $post = Posts::where('id', $id)->first();
        $actor = $request->getAttribute('actor');
        $data = $request->getParsedBody();
        $userId = $actor->id ?? null;

        if ($post) {
            $post->content = $data['content'];

            // Check if $userId is valid and exists in the users table.
            // If not, set edited_user_id to null or handle accordingly.
            if ($userId && User::where('id', $userId)->exists()) {
                $post->edited_user_id = $userId;
            } else {
                // Handle cases where $userId is not valid.
                // This might be setting to null or some other logic based on your application's requirements.
                $post->edited_user_id = null;
            }

            $post->save();
        }

        return new JsonResponse(['data' => $post->toArray()], 200);

    }

    public function delete($id)
    {
        $Disscuss = Discussion::find($id);
        if (!$Disscuss) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }
        $Disscuss->delete();
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
