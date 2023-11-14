<?php

namespace Sidtechno\Customlogin\Listeners;

use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;
class RegisterRoutes {
    public function __construct(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class,[$this,'routes']);

    }

    public function routes(ConfigureForumRoutes $events){
        $events->get('wiki','sidtechno-sustomlogin-wiki');
        $events->get('wiki/post/{slug}','sidtechno-sustomlogin-wiki-post');

    }
}
