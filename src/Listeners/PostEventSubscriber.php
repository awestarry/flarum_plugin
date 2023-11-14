<?php

namespace Sidtechno\Customlogin\Listeners;

use Flarum\Post\Event\Deleted;
use Flarum\Post\Event\Saving;
use Flarum\Post\Event\PostWasLiked;
use Flarum\Post\Event\CommentWasPosted;
use Psr\Log\LoggerInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Foundation\ValidationException;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\UserPoint;
use Sidtechno\Customlogin\Model\PointRule;
use Sidtechno\Customlogin\Model\CommunityPermission;
use Illuminate\Support\Facades\Log;
use Flarum\User\User;
use Flarum\Notification\Notification;
class PostEventSubscriber
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
        // $user = $event->actor;
        // $data = $event->data;


        // // Check if the user is an admin
        // if ($user->id != 1) {
        //     // Check if the isHidden attribute is set
        //     if (isset($data['attributes']['isHidden']) && $data['attributes']['isHidden'] == true) {
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

        // $points = 1;// Assume 10 points are awarded for creating a post
        // $point = new Points();
        // $point->user_id = 5;
        // $point->condition = json_encode($event);
        // $point->points = $points;
        // $point->save();


        // Check if the "liked" attribute has changed
        $data = $event->data;

        //  new Article
        if(isset($event->post) && isset($event->post['number']) && $event->post['number'] == 1){
            $this->cheack_discutag($event,$user);
        }

        if (isset($data['attributes']['title'])) {
            $this->when_newarticale($user,$event);
        }

        // check like
        if (isset($data['attributes']['isLiked'])) {

            if($event->post->number == 1){
             $this->liked_article($event->actor,$event);
            }else{
                 $this->post_like($event->actor,$event);
            }
        }

        // this is for the post when user reply
        if (isset($data['attributes']['content']) && $data['type'] == 'posts' && isset($data['relationships'])) {
            $this->when_comment($user,$event);
        }

        // when user delete post or enhanced article
        if(isset($data['attributes']['isHidden']) && $event->post->number == 1){
            $this->delete_article($event);
        }
        // // Handle the post-create scenario here
    }
    public function post_like($user,$event)
    {
        $data = $event->data;
        // check Here liked article or unlike
        if ($data['attributes']['isLiked'] == true) {
            $point = PointRule::where('condition','liked_comment')->first();
            $liked = Points::where(['condition' => 'enhanced_article', 'discussion_id'=> $event->post->discussion_id])->first();
            if($liked && $liked->post_status == 0){
            $count =  Points::where(['condition' => 'liked_comment', 'discussion_id'=> $event->post->discussion_id])->get();
             $Like_point = 5;
            if(count($count) >= 5){
                    $total = $liked + $Like_point;
                    Points::where('id', $liked->id)->update(['points' => $total,'post_status' => 1]);
                    $this->updateUserPoints($liked->user_id,$Like_point);
                }
            }
            $user = $event->actor;
            $points =$point->score ? : 2; // Assume 5 points for liking a post
            $check = Points::where(['user_id' => $user->id,'condition' => 'liked_comment', 'discussion_id'=> $event->post->discussion_id,'post_id' => $event->post->id])->first();
            if(!empty($check)){
                $check->status = 0;
                $check->save();
                $this->updateUserPoints($user->id, $check->points);
            }else{

                $point = new Points();
                $point->user_id = $user->id;
                $point->condition = 'liked_comment';
                $point->points = $points;
                $point->post_id = $event->post->id;
                $point->discussion_id = $event->post->discussion_id;
                $point->created_at = new \DateTime();
                $point->updated_at = new \DateTime();
                $point->save();
                $this->updateUserPoints($user->id, $points);
            }
        }elseif($data['attributes']['isLiked'] == false) {

        $point = PointRule::where('condition','liked_comment')->first();
            $user = $event->actor;
            $check = Points::where(['user_id' => $user->id,'condition' => 'liked_comment', 'discussion_id' => $event->post->discussion_id,'post_id' => $event->post->id])->first();
            if(!empty($check)){
                $check->status = 1;
                $check->save();
                $this->decreaseUserPoints($user->id, $check->points);
            }
        }
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

    public function when_newarticale($user,$event)
    {
        $condition = 'enhanced_article';
        $data = PointRule::where('condition','enhanced_article')->first();
        $point = 1;
        $post = $event->data;
        if($post['attributes']){
          $content =str_word_count($post['attributes']['content']);
          if($content > 300){
            $point = 3;
          }elseif($content < 300){
            $point =2;
          }elseif($content > 500){
            $point = 5;
          }
        }
        Points::create([
            'user_id' => $user->id,
            'condition' => $condition,
            'points' =>  $point,
            'post_id' => $event->post->discussion->id ? : '', // Assume the event gives  the post ID
            'discussion_id' =>  $event->post->discussion->id ? : '',
            'created_at' => new \DateTime(),
            'updated_at' => new \DateTime(),
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

    public function awardPointsForAcceptedAnswer(AnswerWasAccepted $event)
    {
        $user = $event->actor; // assuming the event provides the user who answered
        $data = PointRule::where('condition', 'answer_accepted')->first();

        $condition = 'answer_accepted';
        $points = $data->score ?: 5;

        if ($data) {
            Points::create([
                'user_id' => $user->id,
                'condition' => $condition,
                'points' => $points,
                'post_id' => $event->post->id, // Assume the event gives the post ID
                'created_at' => new \DateTime(),
                'updated_at' => new \DateTime(),
            ]);

            $this->updateUserPoints($user->id, $points);
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
    public function cheack_discutag($data,$user){
        $tags = $data->post['discussion']['tags'];

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
