<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\CommunityPermission;
class PermissionEditController implements RequestHandlerInterface
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

        $Permission = CommunityPermission::select('id','reputation_requirement','permission','description')->find($id);

        if (!$Permission) {
            return new JsonResponse([
                'message' => false,
                'error' => 'Permission Not found.',
            ], 404);
        }


        return new JsonResponse(['message' => true, 'data' => $Permission ], 200);
    }
}
