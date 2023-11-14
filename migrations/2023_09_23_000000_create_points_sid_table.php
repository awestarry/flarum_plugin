<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        // Define the changes to the database structure here.
        if (!$schema->hasTable('points_sid')) {
            $schema->create('points_sid', function ($table) {
                $table->increments('id');
                $table->integer('user_id');
                $table->text('condition');
                $table->integer('points');
                $table->integer('post_id')->nullable();
                $table->integer('discussion_id')->nullable();
                $table->integer('status')->default(0);
                $table->integer('comment_status')->default(0);
                $table->integer('post_status')->default(0);
                $table->integer('wiki')->default(0);
                $table->timestamps();
            });
        }
    },

    'down' => function (Builder $schema) {
        // Reverse the changes to the database structure here.
        if ($schema->hasTable('points_sid')) {
            $schema->drop('points_sid');
        }
    },
];
