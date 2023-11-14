<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Permission;
class PermissiondeleteController implements RequestHandlerInterface
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

        $Permission = Permission::find($id);

        if (!$Permission) {
            return new JsonResponse([
                'message' => false,
                'error' => 'Permission Not found.',
            ], 404);
        }
        $Permission->delete();

        return new JsonResponse(['message' => true, 'data' => 'Deleted'], 200);
    }
}
