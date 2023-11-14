<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\UserPoint;
use Flarum\User\User;

class UserpointsController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');

        $refererHeader = $request->getHeader('Referer');
        $refererUrl = $refererHeader[0] ?? null;


        if ($refererUrl) {
            $urlParts = explode('/', $refererUrl);
        $username = end($urlParts);
        $username = str_replace('u/', '', $username);
        }

        if (!$actor || !$actor->id) {
            return new JsonResponse([ 'message' => false, 'error' => 'User are not login.',], 404);
        }

        if(isset($username)) {
            $user = User::where('username', $username)->first();
            if(!empty($user)) {
                $points = Points::where('user_id', $user->id)->select('condition', 'points')->get();
                $total = UserPoint::where('user_id', $user->id)->select('current_point')->first();
                if(!$total) {
                    $total = ['current_point' => 0];
                }
                return new JsonResponse(['message' => true,'Total' => $total, 'data' => $points->toArray()], 200);
            }
        }

        $points = Points::where('user_id',$actor->id)->select('condition','points')->get();
        $total = UserPoint::where('user_id',$actor->id)->select('current_point')->first();

        if(!$total){
        $total = ['current_point' => 0];
        }

        return new JsonResponse(['message' => true,'Total' => $total, 'data' => $points->toArray()], 200);
    }
}
