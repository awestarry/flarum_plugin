<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        // Define the changes to the database structure here.
        if (!$schema->hasTable('user_points')) {
            $schema->create('user_points', function ($table) {
                $table->increments('id');
                $table->integer('user_id')->index();
                $table->integer('current_point');
                $table->timestamps();
            });
        }
    },

    'down' => function (Builder $schema) {
        // Reverse the changes to the database structure here.
        if ($schema->hasTable('user_points')) {
            $schema->drop('user_points');
        }
    },
];
