<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Collection;
use Flarum\Discussion\Discussion;

class RemoveCollection implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (!$actor) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $discussion_id = $request->getAttribute('routeParameters')['id'];
        $user_id = $actor->id;
        Collection::where(['user_id' => $user_id, 'discussion_id' => $discussion_id])->delete();

        return new JsonResponse(['status' => true, 'data' => 'Removed Successfully from your collection.'], 200);
    }

}
