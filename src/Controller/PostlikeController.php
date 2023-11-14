<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;
use Sidtechno\Customlogin\Model\Wikilike;

class PostlikeController implements RequestHandlerInterface
{
    /**
     * {@inheritdoc}
     */
    public function handle(ServerRequestInterface $request): ResponseInterface {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $postId = $request->getAttribute('routeParameters')['id'];

        $existing = Wikilike::where('wiki_articles_id', $postId)->where('user_id', $actor->id)->first();
        if ($existing) {
            if ($existing->reaction_type == 0) {
                $existing->reaction_type = 1;
            } else {
                $existing->reaction_type = 0;
            }
            $existing->save();
            return new JsonResponse(['message' => true, 'data' => $existing->toArray()], 200);
        } else {
            $like = new Wikilike;
            $like->wiki_articles_id = $postId;
            $like->user_id = $actor->id;
            $like->reaction_type = 0;
            $like->save();
            return new JsonResponse(['message' => true, 'data' => $like->toArray()], 200);
        }


    }
}
