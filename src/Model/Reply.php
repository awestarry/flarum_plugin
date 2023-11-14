<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
class Reply extends AbstractModel
{
    protected $table = 'sid_reply';
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


    public function likesRelation()
    {
        return $this->hasMany(SidLike::class, 'post_id', 'id')->where('reaction_type', 'like');
    }

    public function dislikesRelation()
    {
        return $this->hasMany(SidLike::class, 'post_id', 'id')->where('reaction_type', 'dislike');
    }

    public function userReaction($userId)
    {
        $like = $this->likesRelation->where('user_id', $userId)->first();
        $dislike = $this->dislikesRelation->where('user_id', $userId)->first();

        if ($like) {
            return 'like';
        } elseif ($dislike) {
            return 'dislike';
        }
        return null;
    }

}
