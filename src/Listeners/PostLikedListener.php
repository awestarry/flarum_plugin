<?php

namespace Sidtechno\Customlogin\Listeners;

use Flarum\Post\Event\Liking;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;

class PostLikedListener
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Liking::class, [$this, 'sendLikeNotification']);
    }

    public function sendLikeNotification(Liking $event)
    {
        $post = $event->post;
        $liker = $event->actor; // The user who liked the post

        $postOwner = $post->user; // The user who owns the post

        // Create and send the notification
        $postOwner->notify(new \Sidtechno\Customlogin\Notifications\PostLikedNotification($post, $liker));
    }
}


?>
