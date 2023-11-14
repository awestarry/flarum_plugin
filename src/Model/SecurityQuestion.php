<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class SecurityQuestion extends AbstractModel
{
    protected $table = 'security_questions';
    public $timestamps = true;
}
