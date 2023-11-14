<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
class Wikilike extends AbstractModel
{
    protected $table = 'wiki_likes';

    protected $fillable = [ 'wiki_articles_id', 'user_id', 'reaction_type', 'status'];
    public $timestamps = true;
    public function likes()
    {
        return $this->hasMany(Wikilike::class);
    }


    // WikiPost.php
public function users()
{
    return $this->belongsToMany(User::class, 'user_post_permissions')
        ->withPivot('permission_id')
        ->using(UserPostPermission::class);
}


}
