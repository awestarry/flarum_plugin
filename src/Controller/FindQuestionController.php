<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Flarum\User\User;
use Sidtechno\Customlogin\Model\SecurityQuestion;
use Illuminate\Support\Arr;
use Flarum\Http\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

class FindQuestionController implements RequestHandlerInterface
{
    protected $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $id = $actor->id;

        $user = User::find($id);

            if (!$user) {
                return new JsonResponse([
                    'message' => false,
                    'error' => 'User not found Not found',
                ], 400);
            }


        $questions = SecurityQuestion::where('user_id', $user->id)->select('user_id','id','question')->get();

        if ($questions->isEmpty()) {
            return new JsonResponse([
                'message' => false,
                'error' => 'Question Not found',
            ], 400);
        }

        return new JsonResponse(['message' => true, 'data' => $questions], 200);
    }
}
