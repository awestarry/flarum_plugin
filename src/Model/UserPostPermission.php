<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
// UserPostPermission.php
class UserPostPermission extends AbstractModel
{
    public function post()
    {
        return $this->belongsTo(WikiPost::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function permission()
    {
        return $this->belongsTo(WikiPermission::class);
    }
}
