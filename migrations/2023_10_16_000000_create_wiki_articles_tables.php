<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('wiki_articles')) {
            $schema->create('wiki_articles', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->string('slug')->nullable();
                $table->longText('content');
                $table->unsignedBigInteger('category_id');
                $table->foreign('category_id')->references('id')->on('wiki_categories')->onDelete('cascade');
                $table->unsignedInteger('user_id')->index();
                $table->timestamps();
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            });

        }
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('wiki_articles');
    },
];
