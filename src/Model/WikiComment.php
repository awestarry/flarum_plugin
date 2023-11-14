<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Sidtechno\Customlogin\Model\WikiPost;

class WikiComment extends AbstractModel
{
 protected $table = 'wiki_comments';
 public $timestamps = true;
 protected $fillable = [ 'user_id', 'post_id', 'content'];

    public function wikipost()
    {
        return $this->belongsTo(WikiPost::class);
    }
    public function parentComment()
    {
        return $this->belongsTo(WikiComment::class, 'parent_comment_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function replies()
    {
        return $this->hasMany(WikiReplyComment::class, 'wiki_comment_id', 'id');
    }
    public function likesRelation()
    {
        return $this->hasMany(WikiCommentLike::class, 'comment_id', 'id')->where('reaction_type', 'like');
    }

    public function getLikesCountAttribute()
    {
        return $this->likesRelation->count();
    }

    public function dislikesRelation()
{
    return $this->hasMany(WikiCommentLike::class, 'comment_id', 'id')
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
