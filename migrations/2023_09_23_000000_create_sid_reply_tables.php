<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;


return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('sid_reply')) {
            $schema->create('sid_reply', function ($table) {
                $table->id();
                $table->unsignedInteger('user_id');
                $table->unsignedInteger('post_id');
                $table->text('content');
                $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->timestamps();
            });
        }
    },

    'down' => function (Builder $schema) {
        if ($schema->hasTable('sid_reply')) {
            $schema->drop('sid_reply');
        }
    },
];
