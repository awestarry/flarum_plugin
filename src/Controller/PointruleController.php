<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\PointRule;

class PointruleController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $id = $request->getAttribute('routeParameters')['id'];
        $data  = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'score'   => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 422);
        }
        $Permission =  PointRule::find($id);
        if (!$Permission) {
            return new JsonResponse([
                'message' => false,
                'error' => 'Permission Not found.',
            ], 404);
        }

            $Permission->score = $data['score'];
            if(isset($data['limit'])){
                $Permission->limit = $data['limit'];
            }
            $Permission->save();

        return new JsonResponse([], 200);
    }
}
