<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('wiki_comment_likes')) {
            return;
        }
        $schema->create('wiki_comment_likes', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id');
            $table->unsignedBigInteger('comment_id');
            $table->enum('reaction_type', ['like', 'dislike']);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('comment_id')->references('id')->on('wiki_comments')->onDelete('cascade');
            $table->unique(['user_id', 'comment_id']);
            $table->timestamps();
        });
    },

    'down' => function (Builder $schema) {
        $schema->dropIfExists('wiki_comment_likes');
    }
];
