<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;


return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('wiki_categories')) {
            $schema->create('wiki_categories', function ($table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
            });
        }
    },

    'down' => function (Builder $schema) {
        if ($schema->hasTable('wiki_categories')) {
            $schema->drop('wiki_categories');
        }
    },
];
