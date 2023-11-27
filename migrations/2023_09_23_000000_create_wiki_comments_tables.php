<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;


return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('wiki_comments')) {
            $schema->create('wiki_comments', function ($table) {
            $table->id();
            $table->unsignedInteger('user_id');
            $table->unsignedBigInteger('post_id');
            $table->text('content');
            $table->foreign('post_id')->references('id')->on('wiki_articles')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
            });
        }
    },

    'down' => function (Builder $schema) {
        if ($schema->hasTable('wiki_comments')) {
            $schema->drop('wiki_comments');
        }
    },
];
