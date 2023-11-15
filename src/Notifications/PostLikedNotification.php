<?php
namespace  Sidtechno\Customlogin\Notifications;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Post\Post;
use Flarum\User\User;

class PostLikedNotification implements BlueprintInterface
{
    protected $post;
    protected $liker;

    public function __construct(Post $post, User $liker)
    {
        $this->post = $post;
        $this->liker = $liker;
    }

    public function getSubject()
    {
        return "{$this->liker->username} liked your post";
    }

    public function getFromUser()
    {
        return $this->liker;
    }

    public function getData()
    {
        return ['post_id' => $this->post->id];
    }

    public static function getType()
    {
        return 'postLiked';
    }

    public static function getSubjectModel()
    {
        return Post::class;
    }
}

?>
