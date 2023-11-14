<?php

namespace Sidtechno\Customlogin\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Sidtechno\Customlogin\Model\SecurityQuestion;

class SecuritySerializer extends AbstractSerializer
{
    protected $type = 'security-questions';

    protected function getDefaultAttributes($model)
    {
        return [
            'user_id' => $model->user_id,
            'question' => $model->question,
            'answer' => $model->answer,
        ];
    }

    public function collection($models)
    {
        return $models->map([$this, 'getDefaultAttributes']);
    }
}
