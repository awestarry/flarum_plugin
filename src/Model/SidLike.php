<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class SidLike extends AbstractModel
{
    protected $table = 'sid_like';
    public $timestamps = true;
    protected $guarded = [];
}
