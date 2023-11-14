<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
class Discussions extends AbstractModel
{
    protected $table = 'discussions';
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }


    public function content()
    {
        return $this->belongsTo(Post::class,'discussion_id')->where('number', '<=', 1);
    }

    public function tags()
    {
        return $this->hasMany(DiscussionTag::class, 'discussion_id');
    }

    public function likes()
    {
        return $this->hasMany(Like::class, 'post_id', 'first_post_id');
    }
}
