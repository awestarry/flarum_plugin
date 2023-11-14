<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class WikiCategory extends AbstractModel
{
    protected $table = 'wiki_categories';
    protected $fillable = ['name'];

    public $timestamps = true;
    // public function subcategories() {
    //     return $this->hasMany(WikiSubcategory::class);
    // }

    public function post() {
        return $this->hasMany(WikiPost::class,'category_id');
    }
    public function subcategories()
    {
        return $this->hasMany(WikiSubCategory::class, 'category_id');
    }
}
