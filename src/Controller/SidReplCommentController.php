<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;
use Sidtechno\Customlogin\Model\SidLike;
use Sidtechno\Customlogin\Model\Reply;


class SidReplCommentController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $method = $request->getMethod();

        switch($method) {
            case 'POST':
                return $this->createReply($request);
            case 'PUT':
                $id = $request->getAttribute('routeParameters')['id'];
                return $this->updateReply($id, $request);
            case 'DELETE':
                $id = $request->getAttribute('routeParameters')['id'];
                return $this->deleteReply($id,$request);
            default:
                return new JsonResponse(['status' => false, 'error' => 'Method not allowed.'], 405);

        }
    }

    private function createReply(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $data = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'post_id'   => 'required',
            'content'   => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse([ 'message' => false, 'errors' => $validator->errors(), ], 422);
        }

        $cleanContent = strip_tags($data['content']);
        $contentWords = str_word_count($cleanContent);
        if ($contentWords > 100) {
            return new JsonResponse(['message' => false, 'error' => 'content required maximum 100 words.'], 400);
        }

        $reply = new Reply();
        $reply->user_id  = $actor->id;
        $reply->post_id  = $data['wiki_comment_id'];
        $reply->content  = $data['content'];
        $reply->save();

        $userId = $actor->id ?? null;
        $comments = Reply::where('id',$reply->id)->withCount('likesRelation', 'dislikesRelation')->with('user')->first();
        $comments->user_reaction = $userId ? $reply->userReaction($userId) : null;
        $comments->can_edit = true;
        $comments->can_delete = true;
        if(SidLike::where('post_id', $reply->id)->where('user_id',$comments->user_id)->first()) {
            $comments->like = true;
        } else {
            $comments->like = false;
        }
        return new JsonResponse(['message' => true, 'data' => $comments->toArray()], 200);
    }

private function updateReply($id, ServerRequestInterface $request): ResponseInterface
{
    $actor = $request->getAttribute('actor');
    if (!$actor->id) {
        return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
    }

    $data = $request->getParsedBody();

    $validator = app('validator')->make($data, [
        'content'    => 'required',
    ]);

    if ($validator->fails()) {
        return new JsonResponse(['message' => false, 'errors' => $validator->errors(),], 422);
    }



    $reply = Reply::find($id);

    if (!$reply) {
        return new JsonResponse(['status' => false, 'error' => 'Reply not found.'], 404);
    }

    if ($reply->user_id != $actor->id) {
        return new JsonResponse(['status' => false, 'error' => 'Unauthorized.'], 403);
    }

    $reply->content = $data['content'];
    $reply->save();

    $userId = $actor->id ?? null;

    $updatedReply = Reply::where('id', $reply->id)->withCount('likesRelation', 'dislikesRelation')->with('user')->first();
    $updatedReply->user_reaction = $userId ? $reply->userReaction($userId) : null;
    if(SidLike::where('post_id', $reply->id)->where('user_id',  $reply->user_id)->first()) {
        $updatedReply->like = true;
    } else {
        $updatedReply->like = false;
    }
    $updatedReply->can_edit = true;
    $updatedReply->can_delete = true;
    return new JsonResponse(['message' => true, 'data' => $updatedReply->toArray()], 200);
}

private function deleteReply($id, ServerRequestInterface $request): ResponseInterface
{
    $actor = $request->getAttribute('actor');
    if (!$actor->id) {
        return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
    }

    $reply = Reply::find($id);

    if (!$reply) {
        return new JsonResponse(['status' => false, 'error' => 'Reply not found.'], 404);
    }

    if ($reply->user_id != $actor->id) {
        return new JsonResponse(['status' => false, 'error' => 'Unauthorized.'], 403);
    }

    $reply->delete();

    return new JsonResponse(['message' => true, 'data' => 'Reply deleted successfully.'], 200);
}


}
