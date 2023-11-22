<?php

namespace Sidtechno\Customlogin\Listeners;
use Illuminate\Validation\Factory as ValidatorFactory;
use Flarum\Foundation\AbstractValidator;
use Flarum\User\Event\Saving;
use Flarum\Foundation\ValidationException;
use Sidtechno\Customlogin\Model\Points;
use Sidtechno\Customlogin\Model\SecurityQuestion;
class SidValidationRules

{
    protected $validatorFactory;

    public function __construct(ValidatorFactory $validatorFactory)
    {
        $this->validatorFactory = $validatorFactory;
    }

    public function __invoke(Saving $event)
    {

        $customRules = [
            'question1' => 'required',
            'question2' => 'required',
            'question3' => 'required',
            'answer1'   => 'required',
            'answer2'   => 'required',
            'answer3'   => 'required',

        ];


        if(isset($event->data['attributes'])){
            $data = $event->data['attributes'];
            if(empty($data['username']) || empty($data['password'])){
            return false;
            }
        }
        $username = $event->data['attributes'];

        $validators = $this->validatorFactory->make($username, [
            'username' => 'required|unique:users|min:3|max:20|regex:/^[a-zA-Z0-9_]+$/'
        ]);

        if ($validators->fails()) {
          return false;
        }

        $validator = $this->validatorFactory->make($event->data['attributes'], $customRules);

        if ($validator->fails()) {

            throw new ValidationException([
                'errors' => $validator->errors()->first(),
            ]);
        }

        try {

            $data = $event->data['attributes'] ?? [];
            $check = SecurityQuestion::where('user_name',$data['username'])->first();
            if(empty($check)){
                for ($i = 1; $i <= 3; $i++) {
                    $question = new SecurityQuestion();
                    $question->user_id = 1;
                    $question->question = $data['question' . $i] ?? '';
                    $question->answer = $data['answer' . $i] ?? '';
                    $question->user_name = $data['username'] ?? '';
                    $question->save();
                }
            }
        } catch (\Exception $e) {
            // Handle exception, maybe log it or return a custom error message
            // throw new ValidationException(['message' => 'There was an error processing the registration.']);
        }

    }
}
