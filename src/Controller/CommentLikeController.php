<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\WikiCommentLike;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\PointRule;

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
                if ($type === 'like') {
                    $this->subtractPoints($actor->id, $commentId); // Subtract points when user unlikes
                }
            } else {
                $existingReaction->reaction_type = $type;
                $existingReaction->save();
                $message = ($type === 'like') ? 'Comment liked successfully' : 'Comment disliked successfully';
                if ($type === 'like') {
                    $this->addPoints($actor->id, $commentId); // Add points when user changes reaction to like
                } else {
                    $this->subtractPoints($actor->id, $commentId); // Subtract points when user changes reaction to dislike
                }
            }
        } else {
            WikiCommentLike::create([
                'comment_id' => $commentId,
                'user_id' => $actor->id,
                'reaction_type' => $type
            ]);
            $message = ($type === 'like') ? 'Comment liked successfully' : 'Comment disliked successfully';
            if ($type === 'like') {
                $this->addPoints($actor->id, $commentId); // Add points when user likes
            }
        }

        return new JsonResponse(['message' => $message, 'status' => true], 200);
    }

    public function addPoints($userId, $postId){
        // Implementation for adding points
        // Fetch the rule for liking a comment
        $pointsRule = PointRule::where('condition', 'liked_comment')->first();

        if ($pointsRule) {
            // Add points to the user
            Points::create([
                'user_id' => $userId,
                'condition' => 'liked_comment',
                'points' => $pointsRule->score,
                'post_id' => $postId,
                'wiki' => 1,
                'discussion_id' => $postId,
            ]);

            // Update UserPoint
            $userPoint = UserPoint::firstOrCreate(
                ['user_id' => $userId],
                ['current_point' => 0]
            );

            $userPoint->increment('current_point', $pointsRule->score);
        }
    }

    public function subtractPoints($userId, $postId){
        $pointsRule = PointRule::where('condition', 'liked_comment')->first();

        if ($pointsRule) {
            Points::create([
                'user_id' => $userId,
                'condition' => 'unliked_comment',
                'points' => -$pointsRule->score,
                'post_id' => $postId,
                'wiki' => 1,
                'discussion_id' => $postId,
            ]);

            // Update UserPoint
            $userPoint = UserPoint::firstOrCreate(
                ['user_id' => $userId],
                ['current_point' => 0]
            );

            $userPoint->decrement('current_point', $pointsRule->score);
        }
    }

}
