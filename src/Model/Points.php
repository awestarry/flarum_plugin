<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
class Points extends AbstractModel
{
    protected $table = 'points_sid';
    public $timestamps = true;
    protected $fillable = ['user_id', 'condition', 'points','post_id','discussion_id','status','comment_status','post_status','wiki'];
    public function user()
    {
        return $this->belongsTo(Discussion::class, 'discussion_id');
    }
}
