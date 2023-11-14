<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class Permission extends AbstractModel
{
    protected $table = 'permissions';
    public $timestamps = true;
}
