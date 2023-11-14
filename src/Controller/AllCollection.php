<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Collection;
use Flarum\Discussion\Discussion;
class AllCollection implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (!$actor) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        try {
            $collection = Collection::where('user_id', $actor->id)
            ->with(['Discussion' => function($query) {
                $query->select('id', 'title'); // 'id' is required for relation mapping
            }])
            ->get();

            if(empty($collection)){
                return new JsonResponse(['status' => false, 'error' => 'you have not collection'], 500);
            }
            return new JsonResponse(['status' => true, 'data' => $collection], 200);
        } catch (\Exception $e) {
            return new JsonResponse(['status' => false, 'error' => 'Failed to add to collection.'], 500);
        }
    }
}
