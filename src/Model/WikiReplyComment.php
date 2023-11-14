<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Sidtechno\Customlogin\Model\WikiPost;

class WikiReplyComment extends AbstractModel
{
 protected $table = 'wiki_reply_comments';
 protected $fillable = [ 'user_id', 'post_id', 'content','wiki_comment_id'];
 public $timestamps = true;
    public function wikipost()
    {
        return $this->belongsTo(WikiPost::class);
    }


    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function replies()
{
    return $this->hasMany(WikiComment::class, 'wiki_comment_id', 'id');
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
