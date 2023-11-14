<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Permission;

class PermissionStoreController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $data  = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'permission_name'   => 'required',
            'reputation_required'   => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 422);
        }


            $Permission = new Permission();
            $Permission->permission_name = $data['permission_name'];
            $Permission->permission_ext = str_replace(" ", "_", $data['permission_name']);
            $Permission->reputation_required = $data['reputation_required'];
            if(isset($data['description'])){
                $Permission->description = $data['description'];
            }
            $Permission->save();

            return new JsonResponse(['message' => true, 'data' => 'Added Successfully.'], 200);
    }
}
