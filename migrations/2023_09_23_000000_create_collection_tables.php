<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        // Define the changes to the database structure here.
        if (!$schema->hasTable('collections')) {
            $schema->create('collections', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('user_id');
                $table->unsignedInteger('discussion_id');
                $table->string('slug');
                $table->timestamps();

                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('discussion_id')->references('id')->on('discussions')->onDelete('cascade');
            });
        }
    },

    'down' => function (Builder $schema) {

        if ($schema->hasTable('collections')) {
            $schema->table('collections', function (Blueprint $table) {
                $table->dropForeign(['user_id']);
                $table->dropForeign(['discussion_id']);
            });
            $schema->drop('collections');
        }
    },
];
