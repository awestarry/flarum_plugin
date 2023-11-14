<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;
use Sidtechno\Customlogin\Model\Points; // Import the Point model

class PointStoreController implements RequestHandlerInterface
{
    /**
     * {@inheritdoc}
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data', []);

        $validator = app('validator')->make($data, [
            'point_reason' => 'required',
            'points' => 'required|integer',
            'post_id' => 'required'
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        // Create a new point record
        $point = new Points();
        $point->point_reason = $data['point_reason'];
        $point->points = $data['points'];
        $point->post_id = $data['post_id']; // Fixed typo 'podt_id' to 'post_id'
        $point->save();

        return new JsonResponse(['message' => true, 'data' => $point->toArray()], 201);
    }
}
