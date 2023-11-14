<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;  // This was missing
use Flarum\Database\AbstractMigration;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('post_likes', 'reaction_type')) {
            $schema->table('post_likes', function ($table) {
                $table->string('reaction_type')->nullable()->default('like');
            });
        }
    },
    'down' => function (Builder $schema) {
        if ($schema->hasColumn('post_likes', 'reaction_type')) {
            $schema->table('post_likes', function ($table) {
                $table->dropColumn('reaction_type');  // This was corrected to drop the column
            });
        }
    }
];
