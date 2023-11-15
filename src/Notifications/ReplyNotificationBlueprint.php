<?php
namespace Sidtechno\Customlogin\Notification;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\User\User;

class ReplyNotificationBlueprint implements BlueprintInterface {
    protected $reply;
    protected $actor;

    public function __construct($reply, User $actor) {
        $this->reply = $reply;
        $this->actor = $actor;
    }

    // Implement required methods here...
}


?>
