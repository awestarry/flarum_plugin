<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Flarum\User\User;
use Sidtechno\Customlogin\Model\SecurityQuestion;

class VerifySecurityQuestionsController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {

        $actor = $request->getAttribute('actor');
        $data = $request->getParsedBody();

        $data = $request->getParsedBody();

        $questionsAndAnswers = [
            $data['question1'] => $data['answer1'],
            $data['question2'] => $data['answer2'],
            $data['question3'] => $data['answer3'],
        ];
        $user_id = '';
        foreach ($questionsAndAnswers as $questionId => $answer) {
            $quest = SecurityQuestion::find($questionId);
            if ($quest) {
                $user_id = $quest->user_id;
                if ($quest->answer != $answer) {
                    return new JsonResponse([
                        'message' => false,
                        'error' => 'Incorrect answer for question ID ' . $questionId
                    ], 400);
                }
            } else {
                return new JsonResponse([
                    'message' => false,
                    'error' => 'Question not found for ID ' . $questionId
                ], 400);
            }
        }

        // All answers are correct
        return new JsonResponse([
            'message' => true,
            'data' => $user_id
        ], 200);



    }
}
