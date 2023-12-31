<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;
use Sidtechno\Customlogin\Model\Discussion;
use Sidtechno\Customlogin\Model\Post;
use Sidtechno\Customlogin\Model\Like;
use Sidtechno\Customlogin\Model\PointRule;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\WikiReplyCommentLike;
use Flarum\Notification\Notification;

class SidCommentController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface {
        $method = $request->getMethod();

        switch($method) {
            case 'GET':
                // Extract ID from request to determine if we're getting all or one
                $id = $request->getAttribute('id');
                if ($id) {
                    return $this->getComment($id);
                } else {
                    return $this->getAllComments();
                }
            case 'POST':
                return $this->createComment($request);
            case 'PUT':
                $id = $request->getAttribute('routeParameters')['id'];
                return $this->updateComment($id, $request);
            case 'DELETE':
                $id = $request->getAttribute('routeParameters')['id'];
                return $this->deleteComment($id,$request);
            default:
                return new JsonResponse(['status' => false, 'error' => 'Method not allowed.'], 405);
        }
    }

    private function getAllComments(): ResponseInterface {
        $comments = WikiComment::all();
        return new JsonResponse($comments, 200);
    }

    private function getComment($id): ResponseInterface {
        $comment = WikiComment::find($id);
        if ($comment) {
            return new JsonResponse($comment, 200);
        } else {
            return new JsonResponse(['message' => 'Comment not found'], 404);
        }
    }

    private function createComment(ServerRequestInterface $request): ResponseInterface {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }
        $data =  $parsedBody = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'discussion_id'   => 'required',
            'content'   => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 422);
        }
        $post = Post::where('discussion_id', $data['discussion_id'])
        ->orderBy('created_at', 'desc')
        ->first();


       $comment = new Post();
       $comment->user_id  = $actor->id;
       $comment->discussion_id  =  $data['discussion_id'];
       $comment->content  = $data['content'];
       $comment->number = $post->number +1;
       $comment->save();

       $this->discussionincremnt($comment->id);

       $userId = $actor->id ?? null;
       $data = Post::where('id', $comment->id)
        ->with([
            'user',
            'replies' => function($query) {
                $query->withCount(['likesRelation', 'dislikesRelation']);
            },
            'replies.user'
        ])
        ->withCount('likesRelation', 'dislikesRelation')
        ->get()
        ->each(function ($comment) use ($userId) {
            $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
            $comment->edit = $comment->user_id === $userId;
            $comment->delete = $comment->edit;
            foreach($comment->replies as $reply) {
                $reply->user_reaction = $userId ? $reply->userReaction($userId) : null;
                 // her check user can edit or not
                 $reply->can_edit = $reply->user_id === $userId;
                 $reply->can_delete = $reply->can_edit;
            }
        });


       return new JsonResponse(['message' => true, 'data' => $data], 200);
    }

    private function updateComment($id, ServerRequestInterface $request): ResponseInterface {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $data = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'content'    => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse(['message' => false,'errors' => $validator->errors(),], 422);
        }

        $comment = Post::find($id);

        if ($comment->user_id != $actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'Unauthorized.'], 403);
        }
        $comment->content = $data['content'];
        $comment->save();
        $userId = $actor->id ?? null;
        $data = Post::where('id', $comment->id)
        ->with([
            'user',
            'replies' => function($query) {
                $query->withCount(['likesRelation', 'dislikesRelation']);
            },
            'replies.user'
        ])
        ->withCount('likesRelation', 'dislikesRelation')
        ->get()
        ->each(function ($comment) use ($userId) {
            $comment->user_reaction = $userId ? $comment->userReaction($userId) : null;
            $comment->edit = $comment->user_id === $userId;
            $comment->delete = $comment->edit;
            if(isset($userId) && Like::where('post_id', $comment->id)->where('user_id',$userId)->first()) {
                $comment->like = true;
            } else {
                $comment->like = false;
            }
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

        return new JsonResponse(['message' => true, 'data' => $data], 200);
    }

    private function deleteComment($id,ServerRequestInterface $request): ResponseInterface {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $comment = WikiComment::find($id);
        $comment->delete();
        return new JsonResponse(['message' => true, 'data' => 'Comment deleted successfully.'], 200);
    }



    public function discussionincremnt($id){
        Discussion::where('id', $id)->increment('comment_count');
    }


}
