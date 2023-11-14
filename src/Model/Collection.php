<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
class Collection extends AbstractModel
{
    protected $table = 'collections';
    public $timestamps = true;
      public function Discussion()
    {
        return $this->belongsTo(Discussion::class, 'discussion_id');
    }
}
