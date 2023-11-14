<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('community_permissions')) {
            $schema->create('community_permissions', function (Blueprint $table) {
                $table->increments('id');
                $table->string('permission', 255)->nullable(false);
                $table->integer('reputation_requirement')->nullable(false);
                $table->text('description')->nullable(false);
                $table->timestamps();
            });

            // Seed the table with the provided data
            $schema->getConnection()->table('community_permissions')->insert([
                ['permission' => 'delete_qa_post', 'reputation_requirement' => 800, 'description' => 'Allows a user to delete questions and answers within the community.'],
                ['permission' => 'revoke_user_avatar', 'reputation_requirement' => 500, 'description' => 'Grants the capability to revoke or remove the avatar of another user.'],
                ['permission' => 'review_community_documentation_improvements', 'reputation_requirement' => 200, 'description' => 'Permits the user to review and approve changes or additions to community documentation.'],
                ['permission' => 'handle_user_reports', 'reputation_requirement' => 200, 'description' => 'Entrusts the user with the responsibility of handling and responding to reports made against other community members.'],
                ['permission' => 'review_translation', 'reputation_requirement' => 100, 'description' => 'Empowers the user to review translated content for accuracy and relevance.'],
                ['permission' => 'review_wiki_improvements', 'reputation_requirement' => 100, 'description' => 'Enables the user to review and approve changes or additions made to wikis.'],
                ['permission' => 'reassign_post_or_blog_post_to_a_community', 'reputation_requirement' => 100, 'description' => 'Lets the user reassign or relocate posts or blog articles to different community sections or categories.'],
                ['permission' => 'creating_wikis_and_wiki_categories', 'reputation_requirement' => 100, 'description' => 'Grants the user the capability to create new wikis or wiki categories.'],
                ['permission' => 'voting_robot_detection_results', 'reputation_requirement' => 100, 'description' => 'Allows the user to vote on the results of automated robot detection mechanisms, typically to validate or refute the findings.'],
                ['permission' => 'review_users_first_post', 'reputation_requirement' => 100, 'description' => 'Entrusts the user with the task of reviewing the first post made by a new community member to ensure its quality and appropriateness.'],
                ['permission' => 'send_message', 'reputation_requirement' => 10, 'description' => 'Permits the user to send private or direct messages to other community members.'],
                ['permission' => 'reduce_advertising', 'reputation_requirement' => 10, 'description' => 'As a reward for reaching this reputation, users will experience reduced advertising while browsing the community platform.']
            ]);

        }
    },

    'down' => function (Builder $schema) {
        $schema->dropIfExists('community_permissions');
    }
];
