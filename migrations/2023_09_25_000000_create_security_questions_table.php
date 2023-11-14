<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('security_questions')) {
            $schema->create('security_questions', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('user_id')->index();
                $table->string('question');
                $table->string('answer');
                $table->string('user_name')->nullable();
                $table->timestamps();

                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            });
        }
    },

    'down' => function (Builder $schema) {
        // Reverse the changes to the database structure here.
        if ($schema->hasTable('security_questions')) {
            $schema->drop('security_questions');
        }
    },
];
