<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\UserPoint;

class UserPointController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
{
    $points = UserPoint::with('user')->get();


    $data = $points->map(function ($point, $index) {
        $username = $point->user ? $point->user->username : null;
        return [
            'sr_no' => $index + 1,
            'current_point' => $point->current_point,
            'username' => $username,
        ];
    });

    return new JsonResponse(['success' => true, 'data' => $data], 200);
}

}
