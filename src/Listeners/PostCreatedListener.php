<?php
namespace Sidtechno\Customlogin\Listeners;

use Flarum\Post\Event\Posted;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;

class PostCreatedListener
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Posted::class, [$this, 'sendPostNotification']);
    }

    public function sendPostNotification(Posted $event)
    {
        $post = $event->post;
        $actor = $event->actor; // The user who posted

        // Here, you'd typically check if the actor should be notified, etc.

        $userToNotify = User::find($post->user_id); // The user who will receive the notification

        // Create and send the notification
        $userToNotify->notify(new \Sidtechno\Customlogin\Notifications\PostNotification($post, $actor));
    }
}

?>
