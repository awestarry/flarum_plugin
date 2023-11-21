<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\WikiCommentLike;

class CommentLikeController implements RequestHandlerInterface
{
    /**
     * Handle the request to like/unlike a comment.
     *
     * @param ServerRequestInterface $request
     * @return ResponseInterface
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $commentId = $request->getAttribute('routeParameters')['id'];
        $type = $request->getQueryParams()['type'] ?? 'like';

        $existingReaction = WikiCommentLike::where('comment_id', $commentId)->where('user_id', $actor->id)->first();

        if ($existingReaction) {
            if ($existingReaction->reaction_type == $type) {
                $existingReaction->delete();
                $message = 'Reaction removed successfully';
            } else {
                $existingReaction->reaction_type = $type;
                $existingReaction->save();
                $message = ($type === 'like') ? 'Comment liked successfully' : 'Comment disliked successfully';

            }
        } else {
            WikiCommentLike::create([
                'comment_id' => $commentId,
                'user_id' => $actor->id,
                'reaction_type' => $type
            ]);
            $message = ($type === 'like') ? 'Comment liked successfully' : 'Comment disliked successfully';
        }

        return new JsonResponse(['message' => $message, 'status' => true], 200);
    }


}
