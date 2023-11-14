<?php

namespace Sidtechno\Customlogin\Model;

use Flarum\Database\AbstractModel;

class CommunityPermission extends AbstractModel
{
    protected $table = 'community_permissions';
    public $timestamps = true;
    protected $fillable = ['reputation_requirement', 'permission','description'];
}
