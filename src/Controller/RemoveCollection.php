<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Collection;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\PointRule;
use Flarum\Discussion\Discussion;

class RemoveCollection implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (!$actor) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $discussion_id = $request->getAttribute('routeParameters')['id'];
        $user_id = $actor->id;

        // Delete the collection entry for the user and the discussion
        Collection::where(['user_id' => $user_id, 'discussion_id' => $discussion_id])->delete();

        // Fetch the points rule for 'collected_article'
        $data = PointRule::where('condition','collected_article')->first();

        if($data) {
            // Find and delete the associated points record
            Points::where(['user_id' => $user_id, 'condition' => $data->condition, 'discussion_id' => $discussion_id])->delete();

            // Update user points
            $this->updateUserPoints($user_id, -$data->score); // Notice the negative sign to deduct points
        }

        return new JsonResponse(['status' => true, 'data' => 'Removed Successfully from your collection.'], 200);
    }

    public function updateUserPoints($id, $score)
    {
        $user = UserPoint::where('user_id', $id)->first();
        if ($user) { // Only update points if the user exists
            $user->current_point += $score;
            $user->save();
        }
    }
}
