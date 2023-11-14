<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Flarum\User\User;

class UserController implements RequestHandlerInterface
{
    /**
     * Handle the incoming request.
     *
     * @param ServerRequestInterface $request
     * @return ResponseInterface
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $id = $request->getAttribute('routeParameters')['id'];

        $user = User::select('id','username','email','avatar_url')->find($id);

        if (!$user) {
            return new JsonResponse([
                'message' => false,
                'error' => 'User not found',
            ], 404);
        }

        return new JsonResponse(['message' => true, 'data' => $user], 200);
    }
}
