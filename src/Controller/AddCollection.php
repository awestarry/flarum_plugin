<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Carbon\Carbon;
use Sidtechno\Customlogin\Model\Collection;
use Flarum\Discussion\Discussion;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\PointRule;
class AddCollection implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'Please log in to perform this action.'], 403);
        }

        $discussion_id = $request->getAttribute('routeParameters')['id'];
        $user_id = $actor->id;

        $discussion = Discussion::where('id',$discussion_id)->first();

        if (empty($discussion)) {
            return new JsonResponse(['status' => false, 'error' => 'This Post in not find.'], 400);
        }

        $existingCollection = Collection::where(['user_id' => $user_id, 'discussion_id' => $discussion_id])->first();

        if ($existingCollection) {
            return new JsonResponse(['status' => true, 'data' => 'This has been already added to your collections.'], 200);
        }

        try {
            $collection = new Collection();
            $collection->user_id = $actor->id;
            $collection->discussion_id = $discussion_id;
            $collection->slug = $discussion_id.'-'.$discussion->slug;
            $collection->save();

            $todayCollectionsCount = Collection::where('user_id', $user_id)
            ->whereDate('created_at', Carbon::now()->toDateString())
            ->count();

                if ($todayCollectionsCount <= 10) {
                    $data = PointRule::where('condition', 'collected_article')->first();
                    if(isset($data)) {
                        Points::create([
                            'user_id' => $user_id,
                            'condition' => $data->condition,
                            'points' =>  $data->score,
                            'discussion_id' =>  $discussion_id,
                        ]);
                        $this->updateUserPoints($user_id, $data->score);
                    }
                }
            return new JsonResponse(['status' => true, 'data' => 'Added successful in your collection.'], 200);
        } catch (\Exception $e) {
            return new JsonResponse(['status' => false, 'error' => 'Failed to add to collection.'], 500);
        }
    }
    public function updateUserPoints($id,$score){
        $user = UserPoint::where('user_id', $id)->first();
        if (empty($user)) {
            $user = new UserPoint();
            $user->user_id = $id;
            $user->current_point = 0;  // Initialize points to 0
        }
        $user->current_point += $score; // Increment the points
        $user->save();
    }
}
