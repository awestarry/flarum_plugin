<?php

namespace Sidtechno\Customlogin\Listeners;

use Flarum\User\Event\Registered;
use Flarum\Foundation\ValidationException;
use Illuminate\Contracts\Events\Dispatcher;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\SecurityQuestion;

class PostRegisterOperations
{
    public function handle(Registered $event)
    {
        $user = $event->user;

        try {

            SecurityQuestion::where('user_name', $user->username)
            ->update(['user_id' => $user->id]);


            $user->activate();
            $user->save();

        } catch (\Exception $e) {
            // Handle exception, maybe log it or return a custom error message
            throw new ValidationException(['message' => 'There was an error processing the registration.']);
        }
    }
}
