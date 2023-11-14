<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;
use Flarum\Http\RequestUtil;
use Sidtechno\Customlogin\Model\SecurityQuestion;
use Flarum\User\User; // Import the User model for validation

class UpdatePasswordController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $data = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'user_id' => 'required|exists:users,id',
            'password' => 'required|confirmed|min:8', // Add 'confirmed' rule to check if password_confirmation matches
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 400);
        }

        try {
            $user = User::findOrFail($data['user_id']);
            $user->setPasswordAttribute($data['password']);
            $user->save();

            return new JsonResponse(['message' => true], 200);
        } catch (\Exception $e) {
            // Log the error for debugging purposes
            app('log')->error($e);

            // Return a generic error response
            return new JsonResponse([
                'message' => false,
                'errors' => 'An unexpected error occurred. Please try again later.',
            ], 500);
        }
    }


}
