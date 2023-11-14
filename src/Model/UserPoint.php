<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

class UserPoint extends AbstractModel
{
    protected $table = 'user_points';
    protected $fillable = ['user_id', 'current_point'];
    public $timestamps = true;
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
