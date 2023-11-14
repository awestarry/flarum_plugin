<?php
namespace Sidtechno\Customlogin\Listeners;

use Psr\Log\LoggerInterface;

use Flarum\User\Event\AvatarSaving;
use Flarum\User\Avatar\Event;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Foundation\ValidationException;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\CommunityPermission;
use Sidtechno\Customlogin\Model\UserPoint;
use Illuminate\Support\Facades\Log;
class AvatarChangedEvents
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
        $events->listen(AvatarSaving::class, [$this, 'whenAvatarIsSaving']);
    }

    /**
     * Handle the avatar changed event.
     *
     * @param AvatarChangedEvent $event
     */
    public function whenAvatarIsSaving(AvatarSaving $event)
    {


        if (isset($event->user)) {

            $eventUser = $event->user;

            if($eventUser->id != 1) {
                $permission = CommunityPermission::where('permission','=','change_user_avatar')->first();

                if ($permission) {
                    $userPointsRecord = UserPoint::where('user_id', $eventUser->id)->first();

                    if ($userPointsRecord && $userPointsRecord->current_point < $permission->reputation_requirement OR empty($userPointsRecord)) {
                        throw new ValidationException([
                            'error' => "You need at least {$permission->reputation_requirement} points to update your Image."
                        ]);
                    }
                }
            }
        }

    }
}
