<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('points_rules')) {
            $schema->create('points_rules', function (Blueprint $table) {
                $table->increments('id');
                $table->string('condition', 255)->nullable(false);
                $table->integer('score')->nullable(false);
                $table->integer('limit')->nullable(false);
                $table->string('applies_to', 255)->nullable(true);  // Setting this to true as some values in your insert data were NULL.
                $table->timestamps();
            });

            $schema->getConnection()->table('points_rules')->insert([
                ['condition' => 'answer_accepted', 'score' => 5, 'limit' => 0, 'applies_to' => 'qa-post'],
                ['condition' => 'enhanced_article', 'score' => 5, 'limit' => 0, 'applies_to' => 'blog-post,post'],
                ['condition' => 'created_wiki', 'score' => 5, 'limit' => 1, 'applies_to' => null],
                ['condition' => 'approved_translation', 'score' => 2, 'limit' => 0, 'applies_to' => null],
                ['condition' => 'accepted_other_answers', 'score' => 2, 'limit' => 1, 'applies_to' => null],
                ['condition' => 'improvements_adopted', 'score' => 2, 'limit' => 1, 'applies_to' => null],
                ['condition' => 'liked_comment', 'score' => 1, 'limit' => 10, 'applies_to' => null],
                ['condition' => 'collected_article', 'score' => 1, 'limit' => 10, 'applies_to' => null],
                ['condition' => 'liked_article', 'score' => 1, 'limit' => 10, 'applies_to' => null],
                ['condition' => 'Comment_posted', 'score' => 5, 'limit' => 0, 'applies_to' => 'Comment Posted'],
                ['condition' => 'Reply_posts', 'score' => 1, 'limit' => 5, 'applies_to' => 'Reply to Q&A posts']
            ]);
        }
    },

    'down' => function (Builder $schema) {
        $schema->dropIfExists('points_rules');
    }
];
