<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
class WikiReplyCommentLike extends AbstractModel
{
    protected $table = 'wiki_replycomment_likes';

    protected $fillable = [ 'user_id', 'comment_id','reaction_type'];
    public $timestamps = true;

    public function users()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function likesRelation()
    {
        return $this->hasMany(WikiReplyCommentLike::class, 'comment_id', 'id')->where('reaction_type', 'like');
    }

    public function dislikesRelation()
    {
        return $this->hasMany(WikiReplyCommentLike::class, 'comment_id', 'id')->where('reaction_type', 'dislike');
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
