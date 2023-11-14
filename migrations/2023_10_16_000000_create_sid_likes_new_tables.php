<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('sid_like')) {
            return;
        }

        $schema->create('sid_like', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->index();
            $table->unsignedBigInteger('post_id')->index();
            $table->enum('reaction_type', ['like', 'dislike']);

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('post_id')->references('id')->on('sid_reply')->onDelete('cascade');

            $table->unique(['user_id', 'post_id']); // Updated this line
            $table->timestamps();
        });
    },

    'down' => function (Builder $schema) {
        $schema->dropIfExists('sid_like');
    }
];
