<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
class Posts extends AbstractModel
{
    protected $table = 'posts';
    protected $guarded = [];
        public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function replies()
        {
            return $this->hasMany(Reply::class, 'post_id', 'id');
        }
        public function likesRelation()
        {
            return $this->hasMany(Like::class, 'post_id', 'id')->where('reaction_type', 'like');
        }

        public function getLikesCountAttribute()
        {
            return $this->likesRelation->count();
        }

        public function dislikesRelation()
    {
        return $this->hasMany(Like::class, 'post_id', 'id')
                    ->where('reaction_type', 'dislike');
    }

    public function getDislikesCountAttribute()
    {
        return $this->dislikesRelation->count();
    }

    public function userReaction($userId)
    {
        $reaction = $this->hasMany(WikiCommentLike::class, 'comment_id', 'id')
                        ->where('user_id', $userId)
                        ->first();

        return $reaction ? $reaction->reaction_type : null;
    }

}
