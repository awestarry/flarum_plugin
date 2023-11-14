<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Points;

class PointsController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $id = $request->getAttribute('routeParameters')['id'];
        $point = Points::find($id);

        if (!$point) {
            return new JsonResponse([
                'message' => false,
                'error' => 'Point not found',
            ], 404);
        }

        return new JsonResponse(['message' => true, 'data' => $point->toArray()], 200);
    }
}
