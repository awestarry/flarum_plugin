<?php

namespace Sidtechno\Customlogin;

use Flarum\Extend;

use Flarum\Event\Manager;
use Illuminate\Validation\Factory;
use Flarum\Foundation\Application;
use Flarum\Extend\Event as ExtendEvent;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Container\Container;
use Sidtechno\Customlogin\Controller\CommentLikeController;
use Sidtechno\Customlogin\Controller\VerifySecurityQuestionsController;
use Sidtechno\Customlogin\Controller\QuestionController;
use Sidtechno\Customlogin\Controller\UpdatePasswordController;
use Sidtechno\Customlogin\Controller\FindQuestionController;
use Sidtechno\Customlogin\Controller\CheckPasswordController;
use Sidtechno\Customlogin\Controller\AddCollection;
use Sidtechno\Customlogin\Controller\AllCollection;
use Sidtechno\Customlogin\Controller\WikiControllerki;
use Sidtechno\Customlogin\Controller\RemoveCollection;
use Sidtechno\Customlogin\Controller\CheckQuestController;
use Sidtechno\Customlogin\Controller\ReplyCommentLikeController;
use Sidtechno\Customlogin\Controller\WikiPostController;
use Sidtechno\Customlogin\Controller\PostlikeController;
use Sidtechno\Customlogin\Controller\wikiCommentController;
use Sidtechno\Customlogin\Controller\wikiReplyCommentController;
use Sidtechno\Customlogin\Controller\WikiSubControllerki;
use Sidtechno\Customlogin\Controller\PostController;
use Sidtechno\Customlogin\Controller\SidlikeController;
use Sidtechno\Customlogin\Controller\SidReplCommentController;
use Sidtechno\Customlogin\Controller\CategoryPostController;
use Sidtechno\Customlogin\Controller\CategoryController;
use Sidtechno\Customlogin\Controller\SidReplylikeController;
use Flarum\Post\Event\Deleted;
use Illuminate\Support\Collection;
use Flarum\Post\Event\Saving;
use Flarum\Notification\NotificationSyncer;
use Sidtechno\Customlogin\Notifications\PostLikedNotification;
use Sidtechno\Customlogin\Controller\WikiController;
use Flarum\Event\LikeEvent;
use Flarum\User\Event\Registered;
use Flarum\User\Event\Saving as UserSaving;
use Flarum\User\Permission;
use Flarum\User\User;
return [

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/wiki', ' sidtechno-sustomlogin-wiki')
        // ->route('/post/{slug}', ' sidtechno-sustomlogin-post')
        ->route('/post/{slug}[/{id}]', ' sidtechno-sustomlogin-post')
        ->route('/wiki/post/{slug}', ' sidtechno-sustomlogin-wiki-post'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\View)
    ->namespace('Sidtechno.Customlogin', __DIR__.'/views'),


    (new Extend\Routes('api'))
    ->get('/wiki/post/category/{id}', 'wiki.post.category',CategoryPostController::class)
    ->get('/wiki/post/subcategory/{id}', 'wiki.post.subcategory',SubCategoryPostController::class)
    ->get('/chech/user/question', 'chech.user.question', CheckQuestController::class)
    ->get('/add/collection/{id}', 'add.collection', AddCollection::class)
    ->get('/remove/collection/{id}', 'remove.collection', RemoveCollection::class)
    ->get('/all/collection', 'all.collection', AllCollection::class)

    ->get('/user/question/find', 'user.question.find', FindQuestionController::class)
    ->get('/wiki/category/sub/{slug}', 'wiki.category.sub.index', CategoryController::class)
    ->get('/wiki/post/like/{id}','wiki.post.like',PostlikeController::class)
    ->get('/wiki/comment/like/{id}','wiki.comment.like',CommentLikeController::class)
    ->get('/wiki/replycomment/like/{id}','wiki.comment.dislike',ReplyCommentLikeController::class)

    ->get('/post/reply/like/{id}','post.reply.like',SidReplylikeController::class)



    ->get('/wiki/post/edit/{id}','wiki.post.edit',PostController::class)

    ->get('/wiki/category', 'wikicategory.index', WikiControllerki::class)
    ->post('/wiki/category', 'wikicategory.create', WikiControllerki::class)
    ->get('/wiki/category/{id}', 'wikicategory.show', WikiControllerki::class)
    ->put('/wiki/category/{id}', 'wikicategory.update', WikiControllerki::class)
    ->delete('/wiki/category/{id}', 'wikicategory.delete', WikiControllerki::class)



    ->get('/wiki/post', 'wiki.post.index', WikiPostController::class)
    ->post('/wiki/post/create', 'wiki.post.create', WikiPostController::class)
    ->get('/wiki/post/{slug}', 'wiki.post.show', WikiPostController::class)
    ->put('/wiki/post/{id}', 'wiki.post.update', WikiPostController::class)
    ->delete('/wiki/post/{id}', 'wiki.post.delete', WikiPostController::class)

    ->post('/wikicomment', 'wikicomment', wikiCommentController::class)
    ->put('/wikicomment/{id}', 'wikicomment.update', wikiCommentController::class)
    ->delete('/wikicomment/{id}', 'wikicomment.delete', wikiCommentController::class)



    ->post('/wikireplycomment', 'wikireplycomment', wikiReplyCommentController::class)
    ->put('/wikireplycomment/{id}', 'wikireplycomment.update', wikiReplyCommentController::class)
    ->delete('/wikireplycomment/{id}', 'wikireplycomment.delete', wikiReplyCommentController::class)
    ->post('/update-password', 'update.password',UpdatePasswordController::class)
    ->post('/question/store','question/store',QuestionController::class)
    ->post('/check-password', 'check-password', CheckPasswordController::class)

    ->post('/question/verify','question/verify',VerifySecurityQuestionsController::class),


    (new Extend\Event())
    ->listen(Registered::class, Listeners\PostRegisterOperations::class)
    ->listen(UserSaving::class, Listeners\SidValidationRules::class),


];
