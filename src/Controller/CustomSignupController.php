<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Flarum\User\User;
use Illuminate\Contracts\Bus\Dispatcher;
use Flarum\User\UserValidator;
use Flarum\Http\AccessToken;
use Flarum\Http\SessionAuthenticator;
use Flarum\Http\RememberAccessToken;
use Sidtechno\Customlogin\Model\SecurityQuestion;
class CustomSignupController implements RequestHandlerInterface
{
    protected $bus;
    protected $settings;
    protected $validator;
    protected $authenticator;

    public function __construct(Dispatcher $bus, SettingsRepositoryInterface $settings, UserValidator $validator,SessionAuthenticator $authenticator)
    {
        $this->bus = $bus;
        $this->settings = $settings;
        $this->authenticator = $authenticator;
        $this->validator = $validator;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
{

    $data =   $request->getParsedBody();
    $validator = app('validator')->make($data, [
        'username' => 'required',
        'password' => 'required',
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
    $username = Arr::get($data, 'username');
    $username = str_replace(' ', '', $username);
    $email = $username . '@gmail.com';
    // $email = Arr::get($parsedBody, 'email');
    $password = Arr::get($data, 'password');

    if (!$this->settings->get('allow_sign_up')) {
        return new JsonResponse(['success' => false, 'error' => 'Sign up is not allowed on this forum.'], 400);
    }

    try {
        $this->validator->assertValid(compact('username', 'email', 'password'));

        $user = User::register($username, $email, $password);
        $user->activate();
        $user->save();

        $token = RememberAccessToken::generate($user->id);
        $token->save();
        for ($i = 1; $i <= 3; $i++) {
            $question = new SecurityQuestion();
            $question->user_id = $user->id;
            $question->question = $data['question_' . $i];
            $question->answer = $data['answer_' . $i];
            $question->save();
        }
        // Log in the user
        $session = $request->getAttribute('session');
        $this->authenticator->logIn($session, $token);

        return new JsonResponse(['success' => true, 'data' => $user], 201);

    } catch (ValidationException $e) {
        return new JsonResponse(['success' => false, 'errors' => $e->getErrors()], 422);
    } catch (Exception $e) {
        return new JsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
    }
}

}
