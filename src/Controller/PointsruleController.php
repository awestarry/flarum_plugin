<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Permission;
use Sidtechno\Customlogin\Model\CommunityPermission;
use Sidtechno\Customlogin\Model\PointRule;

class PointsruleController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {

        $point_rules = PointRule::select('id','condition', 'score', 'limit')->get();
        return new JsonResponse(['message' => true, 'data' => $point_rules], 200);
    }
}
