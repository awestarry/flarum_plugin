<?php

// YourExtension/src/Notifications/PostNotification.php

namespace  Sidtechno\Customlogin\Notifications;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Post\Post;
use Flarum\User\User;

class PostNotification implements BlueprintInterface
{
    protected $post;
    protected $actor;

    public function __construct(Post $post, User $actor)
    {
        $this->post = $post;
        $this->actor = $actor;
    }

    public function getSubject()
    {
        return "{$this->actor->username} has created a new post";
    }

    public function getFromUser()
    {
        return $this->actor;
    }

    public function getData()
    {
        return ['post_id' => $this->post->id];
    }

    public static function getType()
    {
        return 'postCreated';
    }

    public static function getSubjectModel()
    {
        return Post::class;
    }
}

?>
