<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\SecurityQuestion;
use Flarum\User\User;

class CheckQuestController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {

        $actor = $request->getAttribute('actor');
        if (!$actor) {
            return new JsonResponse([
                'message' => false,
                'error' => 'User Not login.',
            ], 404);
        }
        $id = $actor->id;
        $Quest = SecurityQuestion::where('user_id',$id)->get();

        if (!$Quest) {
            return new JsonResponse([
                'message' => false,
                'error' => 'Not Found',
            ], 404);
        }

        return new JsonResponse(['message' => true, 'data' => 'Success.'], 200);
    }
}
