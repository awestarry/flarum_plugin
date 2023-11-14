<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
class WikiCommentLike extends AbstractModel
{
    protected $table = 'wiki_comment_likes';

    protected $fillable = [ 'user_id', 'comment_id','reaction_type'];
    public $timestamps = true;

    public function users()
    {
        return $this->belongsTo(User::class,'user_id');
    }


}
