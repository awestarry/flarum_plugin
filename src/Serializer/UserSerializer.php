<?php
namespace Sidtechno\Customlogin\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\User\User;
class UserCusSerializer extends AbstractSerializer
{

    protected $type = 'user';

    protected function getDefaultAttributes($model)
    {
        if ($model instanceof User) {
            return [
                'id'       => $model->id,
                'username'  => $model->username,
                'email'        => $model->email,
                'avatar_url'  => $model->avatar_url
            ];
        }

        return [];
    }
     public function securityquestion($model)
    {
        return $this->hasOne($model, SecuritySerializer::class);
    }
}
