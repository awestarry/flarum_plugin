<?php

namespace Sidtechno\Customlogin\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Flarum\User\User;
class CheckPasswordController  implements RequestHandlerInterface
{
    // No need for a serializer if you're just returning true or false

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $data = $request->getParsedBody();
        $actore =  $request->getAttribute('actor');

        $password = Arr::get($data, 'password');

        // Checking for missing identifier or password
        if (!$actore || !$password) {
            return new JsonResponse([
                'message' => false,
                'errors' => 'actore or password missing.'
            ], 422);
        }

        $user = User::find($actore->id);


        if (!$user || !$user->checkPassword($password)) {
            return new JsonResponse([
                'message' => false,
                'errors' => 'Password incorect'
            ], 422);
        }

        return new JsonResponse([
            'message' => true,
            'data' => 'Password matches successfully.'
        ], 200);  // Status code should be 200 for success, not 422.
    }
}
