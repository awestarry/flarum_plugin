<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\WikiPost;
use Sidtechno\Customlogin\Model\WikiCategory;
use Sidtechno\Customlogin\Model\WikiSubCategory;
use Illuminate\Support\Str;
use Sidtechno\Customlogin\Model\Wikilike;
use Sidtechno\Customlogin\Model\WikiComment;
use Sidtechno\Customlogin\Model\WikiReplyComment;
class PostController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface {
        $id = $request->getAttribute('routeParameters')['id'];

        $post = WikiPost::where('id', $id)->first();
        if (!$post) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }

        return new JsonResponse(['data' => $post], 200);
    }
}
