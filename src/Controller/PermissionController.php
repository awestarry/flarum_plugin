<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Permission;
use Sidtechno\Customlogin\Model\CommunityPermission;
use Sidtechno\Customlogin\Model\PointRule;

class PermissionController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $community_permissions =CommunityPermission::select('id','permission', 'reputation_requirement')->get();
        return new JsonResponse(['message' => true, 'data' => $community_permissions], 200);
    }
}
