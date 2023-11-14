<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('wiki_likes')) {
            return;
        }

        $schema->create('wiki_likes', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('wiki_articles_id');
            $table->unsignedInteger('user_id');
            $table->string('reaction_type')->nullable();
            $table->string('status')->default('0');
            $table->timestamps();

            $table->foreign('wiki_articles_id')->references('id')->on('wiki_articles')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

        });
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('wiki_likes');
    }
];
