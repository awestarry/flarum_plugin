<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class DiscussionTag extends AbstractModel
{
    protected $table = 'discussion_tag';
    protected $guarded = [];
    public function name()
    {
        return $this->belongsTo(Tagname::class, 'tag_id');
    }
}
