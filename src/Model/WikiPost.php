<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
class WikiPost extends AbstractModel
{
    protected $table = 'wiki_articles';

    protected $fillable = [ 'title', 'slug', 'content', 'user_id', 'category_id','subcategory_id'];
    public $timestamps = true;
    public function category()
    {
        return $this->belongsTo(WikiCategory::class,'category_id');
    }
    public function subcategory()
    {
        return $this->belongsTo(WikiSubcategory::class,'subcategory_id');
    }

    // WikiPost.php
public function user()
{
    return $this->belongsTo(User::class,'user_id');
}


}
