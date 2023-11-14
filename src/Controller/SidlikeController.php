<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Like;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\PointRule;

class SidlikeController implements RequestHandlerInterface
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

        $existingReaction = Like::where('post_id', $commentId)->where('user_id', $actor->id)->first();

        if ($existingReaction) {
            if ($existingReaction->reaction_type == $type) {
                // $existingReaction->delete();
                Like::where('post_id', $commentId)->where('user_id', $actor->id)->delete();
                $message = 'Reaction removed successfully';
                if ($type === 'like') {
                    $this->subtractPoints($actor->id, $commentId);
                }
            } else {
                $existingReaction->reaction_type = $type;
                $existingReaction->save();
                $message = ($type === 'like') ? 'Comment liked successfully' : 'Comment disliked successfully';
                if ($type === 'like') {
                    $this->addPoints($actor->id, $commentId);
                } else {
                    $this->subtractPoints($actor->id, $commentId);
                }
            }
        } else {
            Like::create([
                'post_id' => $commentId,
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
        $pointsRule = PointRule::where('condition', 'liked_comment')->first();

        if ($pointsRule) {
            Points::create([
                'user_id' => $userId,
                'condition' => 'liked_comment',
                'points' => $pointsRule->score,
                'post_id' => $postId,
                'wiki' => 1,
                'discussion_id' => $postId,
            ]);
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
