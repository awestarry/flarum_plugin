<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class BestAnswer extends AbstractModel
{
    protected $table = 'best_answers';
    public $timestamps = true;
    protected $fillable = ['user_id', 'discussion_id', 'post_id','points','condition'];
}
