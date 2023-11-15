<?php

namespace Sidtechno\Customlogin\Listeners;

use Flarum\Discussion\Event\Deleted;
use Flarum\Discussion\Event\Saving;
use Flarum\Discussion\Event\PostWasLiked;
use Flarum\Discussion\Event\CommentWasPosted;
use Psr\Log\LoggerInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Foundation\ValidationException;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\PointRule;
use Sidtechno\Customlogin\Model\CommunityPermission;
use Illuminate\Support\Facades\Log;
use Flarum\User\User;
use Flarum\Post\Post;
use Flarum\Tags\Tag;
use Sidtechno\Customlogin\Model\BestAnswer;
use Flarum\Notification\Notification;
class DiscussionEvent
{
    protected $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;

    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {

        $events->listen(Deleted::class, [$this, 'whenPostIsDeleted']);
        $events->listen(Saving::class, [$this, 'whenPostIsSaving']);


    }

    /**
     * Handle a post deleted event.
     *
     * @param Deleted $event
     */
    public function whenPostIsDeleted(Deleted $event)
    {

        // $points = 0;// Assume 10 points are awarded for creating a post
        // $point = new Points();
        // $point->user_id = 1;
        // $point->condition = json_encode($event);
        // $point->points = $points;
        // $point->post_id = 3;
        // $point->save();
        // $user = $event->actor;
        // $data = $event->discussion;

        // // Check if the user is an admin
        // if ($user->id != 1) {
        //     if (isset($data)) {
        //         $points = UserPoint::where('user_id', $user->id)->first();
        //         if ($points->current_point < 800) {

        //             throw new ValidationException([
        //                 'error' => 'You need at least 800 reputation points to delete posts.'
        //             ]);
        //         }
        //     }
        // }

    }

    /**
     * Handle a post saving event.
     *
     * @param Saving $event
     */
    public function whenPostIsSaving(Saving $event)
    {

        $user = $event->actor;
        $data = $event->data;

        // $points = 0;// Assume 10 points are awarded for creating a post
        // $point = new Points();
        // $point->user_id = $user->id;
        // $point->condition = json_encode($event);
        // $point->points = $points;
        // $point->post_id = 3;
        // $point->save();
        // // Handle the post-create scenario here
        // if(isset($event->data['relationships']['tags']['data'])){
        //     $this->cheak_articaltag($event,$user);
        // }
        // if(isset($event->discussion['tags'])){
        //     if($event->discussion['comment_count'] == 1){
        //         $this->cheack_tags($event,$user);
        //     }

        // }

        if(isset($data['relationships']['bestAnswerUser'])){
            $this->best_answerpost($event->discussion,$data);
        }
        if(isset($data['attributes']['bestAnswerPostId']) && $data['attributes']['bestAnswerPostId'] == 0 ){
            $this->best_remove($event->discussion);
        }

    }


    public function best_remove($data){
        $points = Points::where(['condition' => 'answer_accepted','discussion_id' => $data['id']])->first();
        if($points){
            $this->decreaseUserPoints($points->user_id,$points->points);
            BestAnswer::where(function ($query) use ($points, $data) {
                $query->where(['user_id' => $points->user_id, 'discussion_id' => $data['id'], 'post_id' => $points->post_id]);
            })->delete();
            Points::where('id', $points->id)->delete();
        }
    }
        public function best_answerpost($duscus,$data)
        {

            // $best = BestAnswer::where(['discussion_id' => $duscus['id'], 'condition' => 'answer_accepted'])->latest()->first();
            $best = BestAnswer::where('discussion_id', $duscus['id'])->first();

            $id = $data['attributes']['bestAnswerPostId'];
            $post = Post::where('id', $id)->first();
            if (!empty($best)) {
                //  check point for answer_accepted
                $pointsCondition =  'answer_accepted';
                $points = PointRule::where('condition', $pointsCondition)->first();
                // insert in best answer

                // decrease User Points those user have
                if ($points) {
                    $this->insertpoints($pointsCondition, $points->score, $post->user_id, $duscus->id, $post->id);
                    $this->updateUserPoints($post->user_id,$points->score);
                }
                $this->decreaseUserPoints($best->user_id,$best->points);
                Points::where('discussion_id', $best->discussion_id)
                        ->where('user_id', $best->user_id)
                        ->where('condition', 'answer_accepted')
                        ->where('post_id',$best->post_id)
                        ->delete();

                BestAnswer::where('discussion_id', $best->discussion_id)->delete();
                $this->insert_best($duscus->id, $post->id, $post->user_id,$points->score);

            }else{

                $pointsCondition = 'answer_accepted';
                $points = PointRule::where('condition', $pointsCondition)->first();
                if ($points) {
                    $this->insertpoints($pointsCondition, $points->score, $post->user_id, $duscus->id, $post->id);
                    $this->updateUserPoints($post->user_id,$points->score);
                    $this->insert_best($duscus->id, $post->id, $post->user_id,$points->score);
                }
            }
        }


    public function insert_best($discus,$post,$user,$points){
        BestAnswer::create([
            'user_id' => $user,
            'discussion_id' => $discus,
            'post_id' => $post,
            'points' => $points
        ]);

    }
    public function insertpoints($conditon,$points,$user,$duscus,$post){
        try {
            Points::create([
                'user_id' => $user,
                'condition' => $conditon,
                'points' => $points,
                'discussion_id' => $duscus,
                'post_id' => $post
            ]);

            // Log success or perform any other necessary actions on success.
        } catch (\Exception $e) {
            // Handle the exception (e.g., log the error or throw a custom exception).
            // Example: Log::error($e->getMessage());
        }
    }

        public function update_best($user,$post,$discus,$point,$condition){

        }

    public function when_comment($user,$event)
    {
        $condition = 'Reply_posts';
        $data = PointRule::where('condition','Reply_posts')->first();
        $liked = Points::where(['condition' => 'liked_article', 'discussion_id'=> $event->post->discussion->id])->first();

        if($liked && $liked->comment_status == 0){
            $count =  Points::where(['condition' => 'Reply_posts', 'discussion_id'=> $event->post->discussion->id])->get();
         $Like_point = 5;
        if(count($count) >= 5){
                $total = $liked->points + $Like_point;
                Points::where('id', $liked->id)->update(['points' => $total,'comment_status' => 1]);

                $this->updateUserPoints($liked->user_id,$Like_point);
            }
        }
        Points::create([
            'user_id' => $user->id,
            'condition' => $condition,
            'points' =>  $data->score ? : 2,
            'post_id' => $event->post->id ? : '', // Assume the event gives  the post ID
            'discussion_id' =>  $event->post->discussion->id ? : '',
        ]);
        $this->updateUserPoints($user->id, $data->score ? : 2);
    }


    public function liked_article($user,$event){

        $data = $event->data;

        // check Here liked article or unlike
        if ($data['attributes']['isLiked'] == true) {
            $point = PointRule::where('condition','liked_article')->first();
            $user = $event->actor;
            $check = Points::where(['user_id' => $user->id,'condition' => 'liked_article', 'discussion_id'=> $event->post->discussion_id])->first();
            if(!empty($check)){
                $check->status = 0;
                $check->save();
                $this->updateUserPoints($user->id, $check->points);
            }else{
                $points =$point->score ? : 2; // Assume 5 points for liking a post
                Points::create([
                    'user_id' => $user->id,
                    'condition' => 'liked_article',
                    'points' => $points,
                    'post_id' => $event->post->id,
                    'discussion_id' => $event->post->discussion_id,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                ]);
                $this->updateUserPoints($user->id, $points);
            }
        }elseif($data['attributes']['isLiked'] == false) {
        $point = PointRule::where('condition','liked_article')->first();
        $user = $event->actor;
        $check = Points::where(['user_id' => $user->id,'condition' => 'liked_article', 'discussion_id' => $event->post->discussion_id])->first();
        if(!empty($check)){
            $check->status = 1;
            $check->save();
            $this->decreaseUserPoints($user->id, $check->points);
        }

        }
    }


    protected function updateUserPoints($id, $pointsToAdd) {
        $user = UserPoint::where('user_id', $id)->first();
        if (empty($user)) {
            $user = new UserPoint();
            $user->user_id = $id;
            $user->current_point = 0;  // Initialize points to 0
        }
        $user->current_point += $pointsToAdd; // Increment the points
        $user->save();
    }
    protected function decreaseUserPoints($id, $pointsToSubtract) {
        $user = UserPoint::where('user_id', $id)->first();
        if (!empty($user)) {
            $currentPoints = $user->current_point;
            if ($pointsToSubtract <= $currentPoints) {
                $total = $currentPoints - $pointsToSubtract;
                $user->current_point = $total;

                $user->save();
            }
        }
    }

    public function delete_article($event)
    {
        // $data = $event->data;
        // $user_id = $event->post->user_id;

        // // Check if the user is an admin
        // if ($user_id != 1) {
        //     // Check if the isHidden attribute is set
        //     if (isset($data['attributes']['isHidden']) && $data['attributes']['isHidden'] == true) {
        //         $points = UserPoint::where('user_id', $user_id)->first();
        //         if ($points->current_point < 800) {

        //             throw new ValidationException([
        //                 'error' => 'You need at least 800 reputation points to delete posts.'
        //             ]);
        //         }
        //     }
        // }
    }

    public function cheak_articaltag($data,$user){
        $tags = $data->data['relationships']['tags']['data'];

        $tagIds = [];
        foreach ($tags as $tag) {
            $tagIds[] = $tag['id'];
        }
        $foundWikiTag = false;
        $tagsFr = Tag::findMany($tagIds);
        foreach ($tagsFr as $tag) {
            if ($tag['name'] == 'wiki') {
                $foundWikiTag = true;
                break;
            }
        }
        $condition = CommunityPermission::where('permission', 'review_wiki_improvements')->first();

        if(!empty($condition)) {

            if ($foundWikiTag == true) {
                 $points = UserPoint::where('user_id', $user->id)->first();
                 if (!$points || ($user->id != 1 && (!$points || $points->current_point < $condition->reputation_requirement))) {
                    throw new ValidationException([
                        'error' => 'You need at least ' . $condition->reputation_requirement . ' reputation points to create wiki Post.'
                    ]);
                }

            }
        }

    }

    public function cheack_tags($data,$user){
        $tags = $data->discussion['tags'];

        $foundWikiTag = false;

        foreach ($tags as $tag) {
            if ($tag['name'] == 'wiki') {
                $foundWikiTag = true;
                break;  // Exit the loop once we've found the tag
            }
        }

        $condition = CommunityPermission::where('permission', 'review_wiki_improvements')->first();

        if(!empty($condition)) {

            if ($foundWikiTag == true) {
                $points = UserPoint::where('user_id', $user->id)->first();
                if (!$points || ($user->id != 1 && (!$points || $points->current_point < $condition->reputation_requirement))) {
                    throw new ValidationException([
                        'error' => 'You need at least ' . $condition->reputation_requirement . ' reputation points to create wiki Post.'
                    ]);
                }

            }
        }
    }

}
