<?php
namespace Sidtechno\Customlogin\Validation;

use Illuminate\Validation\Validator;

class Sidvaliadtion extends Validator
{
    public function validateSecurityQuestions($attribute, $value, $parameters)
    {
        $questions = [
            'question1' => $this->data['question1'],
            'question2' => $this->data['question2'],
            'question3' => $this->data['question3'],
        ];

        foreach ($questions as $question => $answer) {
            if (empty($answer)) {
                return false;
            }
        }

        return true;
    }
}
