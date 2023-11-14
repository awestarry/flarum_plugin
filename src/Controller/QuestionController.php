<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;
use Sidtechno\Customlogin\Model\SecurityQuestion;
use Flarum\User\User; // Import the User model for validation

class QuestionController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $data =  $parsedBody = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'user_id' => 'required|exists:users,id',
            'question_1' => 'required',
            'question_2' => 'required',
            'question_3' => 'required',
            'answer_1'   => 'required',
            'answer_2'   => 'required',
            'answer_3'   => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 422);
        }
        $questions = SecurityQuestion::where('user_id',$data['user_id'])->delete();
        for ($i = 1; $i <= 3; $i++) {
            $question = new SecurityQuestion();
            $question->user_id = $data['user_id'];
            $question->question = $data['question_' . $i];
            $question->answer = $data['answer_' . $i];
            $question->save();
        }

        return new JsonResponse([], 200);
    }
}
