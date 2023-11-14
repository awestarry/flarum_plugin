<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class WikiSubCategory extends AbstractModel
{
    protected $table = 'wiki_subcategories';

    public $timestamps = true;
    public function post()
    {
        return $this->belongsTo(WikiPost::class,'id');
    }
    public function category()
    {
        return $this->belongsTo(WikiCategory::class,'category_id');
    }
}
