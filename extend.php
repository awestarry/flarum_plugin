<?php

namespace Sidtechno\Customlogin;

use Flarum\Extend;
use Flarum\Post\Event\Liked;
use Flarum\Post\Event\PostWasLiked;
use Flarum\Event\Manager;
use Illuminate\Validation\Factory;
use Flarum\Foundation\Application;
use Flarum\Extend\Event as ExtendEvent;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Container\Container;
use Sidtechno\Customlogin\Services\PointsService;
use Sidtechno\Customlogin\Providers\CustomloginServiceProvider;
use Sidtechno\Customlogin\Controller\CustomLoginController;
use Sidtechno\Customlogin\Controller\PointsController;
use Sidtechno\Customlogin\Controller\CommentLikeController;
use Sidtechno\Customlogin\Controller\PointStoreController;
use Sidtechno\Customlogin\Controller\PointController;
use Sidtechno\Customlogin\Controller\UserController;
use Sidtechno\Customlogin\Controller\CustomSignupController;
use Sidtechno\Customlogin\Controller\UserfindController;
use Sidtechno\Customlogin\Controller\VerifySecurityQuestionsController;
use Sidtechno\Customlogin\Controller\QuestionController;
use Sidtechno\Customlogin\Controller\UserPointController;
use Sidtechno\Customlogin\Controller\UpdatePasswordController;
use Sidtechno\Customlogin\Controller\FindQuestionController;
use Sidtechno\Customlogin\Controller\PermissionController;
use Sidtechno\Customlogin\Controller\PermissionStoreController;
use Sidtechno\Customlogin\Controller\CheckPasswordController;
use Sidtechno\Customlogin\Controller\AddCollection;
use Sidtechno\Customlogin\Controller\CommentDisLikeController;
use Sidtechno\Customlogin\Controller\AllCollection;
use Sidtechno\Customlogin\Controller\WikiControllerki;
use Sidtechno\Customlogin\Controller\RemoveCollection;
use Sidtechno\Customlogin\Controller\PointsruleController;
use Sidtechno\Customlogin\Controller\PermissiondeleteController;
use Sidtechno\Customlogin\Controller\PermissionupdateController;
use Sidtechno\Customlogin\Controller\PermissionEditController;
use Sidtechno\Customlogin\Controller\PointsruleEditController;
use Sidtechno\Customlogin\Controller\PointruleController;
use Sidtechno\Customlogin\Controller\CheckQuestController;
use Sidtechno\Customlogin\Controller\UserpointsController;
use Sidtechno\Customlogin\Controller\ReplyCommentLikeController;
use Sidtechno\Customlogin\Controller\WikiPostController;
use Sidtechno\Customlogin\Controller\PostlikeController;
use Sidtechno\Customlogin\Controller\wikiCommentController;
use Sidtechno\Customlogin\Controller\wikiReplyCommentController;
use Sidtechno\Customlogin\Controller\WikiSubControllerki;
use Sidtechno\Customlogin\Controller\PostController;
use Sidtechno\Customlogin\Controller\DiscussionController;
use Sidtechno\Customlogin\Controller\PostDisController;
use Sidtechno\Customlogin\Controller\SidlikeController;
use Sidtechno\Customlogin\Controller\SidReplCommentController;
use Sidtechno\Customlogin\Controller\CategoryPostController;
use Sidtechno\Customlogin\Controller\SubCategoryPostController;
use Sidtechno\Customlogin\Controller\CategoryController;
use Sidtechno\Customlogin\Controller\SidReplylikeController;
use Sidtechno\Customlogin\Listeners\PostEventSubscriber;
use Sidtechno\Customlogin\Listeners\DiscussionEvent;
use Sidtechno\Customlogin\Listeners\AvatarChangedEvents;
use Sidtechno\Customlogin\Listeners\PostLikedListener;
use Flarum\Post\Event\Deleted;
use Flarum\Post\Event\Saving;
use Sidtechno\Customlogin\Controller\WikiController;
use Sidtechno\Customlogin\Listeners\LikeListener;
use Flarum\Event\LikeEvent;
use Flarum\User\Event\Registered;
use Flarum\User\Event\Saving as UserSaving;

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

    // (new Extend\Routes('forum'))
    // ->get('/wiki', 'wiki.index', WikiController::class),

    (new Extend\Routes('api'))
    ->get('/point/show/{id}', 'point.show', PointsController::class)
    ->get('/user/show/{id}', 'user.show', UserController::class)
    ->get('/wiki/post/category/{id}', 'wiki.post.category',CategoryPostController::class)
    ->get('/wiki/post/subcategory/{id}', 'wiki.post.subcategory',SubCategoryPostController::class)
    ->post('/point/store', 'point.store', PointStoreController::class)
    ->get('/point/all', 'point.all', PointController::class)
    ->get('/chech/user/question', 'chech.user.question', CheckQuestController::class)
    ->get('/add/collection/{id}', 'add.collection', AddCollection::class)
    ->get('/remove/collection/{id}', 'remove.collection', RemoveCollection::class)
    ->get('/all/collection', 'all.collection', AllCollection::class)
    ->get('/user/point/detail', 'user.point.detail', UserpointsController::class)
    ->get('/user/question/find', 'user.question.find', FindQuestionController::class)
    ->get('/wiki/category/sub/{slug}', 'wiki.category.sub.index', CategoryController::class)
    ->get('/wiki/post/like/{id}','wiki.post.like',PostlikeController::class)
    ->get('/wiki/comment/like/{id}','wiki.comment.like',CommentLikeController::class)
    ->get('/wiki/replycomment/like/{id}','wiki.comment.dislike',ReplyCommentLikeController::class)

    ->get('/post/reply/like/{id}','post.reply.like',SidReplylikeController::class)

    ->get('/post/{slug}','post.discussion',DiscussionController::class)
    ->post('/post','post.discussion.create',DiscussionController::class)
    ->put('/post/{id}','post.discussion.update',DiscussionController::class)
    ->delete('/post/{id}','post.discussion.delete',DiscussionController::class)

    ->get('/post/edit/{id}','post.edit',PostDisController::class)
    ->PUT('/post/update/{id}','post.update',PostDisController::class)
    ->delete('/post/delete/{id}','post.delete',PostDisController::class)

    ->get('/post/like/{id}','post.like',SidlikeController::class)

    ->get('/wiki/post/edit/{id}','wiki.post.edit',PostController::class)

    // ->get('/wiki/categories', 'wiki.categories', WikiControllerki::class)
    ->get('/wiki/category', 'wikicategory.index', WikiControllerki::class)
    ->post('/wiki/category', 'wikicategory.create', WikiControllerki::class)
    ->get('/wiki/category/{id}', 'wikicategory.show', WikiControllerki::class)
    ->put('/wiki/category/{id}', 'wikicategory.update', WikiControllerki::class)
    ->delete('/wiki/category/{id}', 'wikicategory.delete', WikiControllerki::class)
    // wiki sub caterorey
    ->get('/wiki/subcategory', 'wikisubcategory.index', WikiSubControllerki::class)
    ->post('/wiki/subcategory', 'wikisubcategory.create', WikiSubControllerki::class)
    ->get('/wiki/subcategory/{id}', 'wikisubcategory.show', WikiSubControllerki::class)
    ->put('/wiki/subcategory/{id}', 'wikisubcategory.update', WikiSubControllerki::class)
    ->delete('/wiki/subcategory/{id}', 'wikisubcategory.delete', WikiSubControllerki::class)

    ->get('/wiki/post', 'wiki.post.index', WikiPostController::class)
    ->post('/wiki/post/create', 'wiki.post.create', WikiPostController::class)
    ->get('/wiki/post/{slug}', 'wiki.post.show', WikiPostController::class)
    ->put('/wiki/post/{id}', 'wiki.post.update', WikiPostController::class)
    ->delete('/wiki/post/{id}', 'wiki.post.delete', WikiPostController::class)

    ->post('/wikicomment', 'wikicomment', wikiCommentController::class)
    ->put('/wikicomment/{id}', 'wikicomment.update', wikiCommentController::class)
    ->delete('/wikicomment/{id}', 'wikicomment.delete', wikiCommentController::class)

    ->post('/post/reply', 'post.reply.create', SidReplCommentController::class)
    ->put('/post/reply/{id}', 'post.reply.update', SidReplCommentController::class)
    ->delete('/post/reply/{id}', 'post.reply.delete', SidReplCommentController::class)

    ->post('/wikireplycomment', 'wikireplycomment', wikiReplyCommentController::class)
    ->put('/wikireplycomment/{id}', 'wikireplycomment.update', wikiReplyCommentController::class)
    ->delete('/wikireplycomment/{id}', 'wikireplycomment.delete', wikiReplyCommentController::class)

    ->post('/user/find','user.find',UserfindController::class)
    ->get('/permission/all','permission.all',PermissionController::class)
    ->get('/points_rule','points_rule',PointsruleController::class)
    ->get('/permission/edit/{id}','permission.edit',PermissionEditController::class)
    ->get('/points_rules/edit/{id}','points_rules.edit',PointsruleEditController::class)
    ->get('/user/points','user.points',UserPointController::class)
    ->get('/permission/delete/{id}','permission.delete',PermissiondeleteController::class)
    ->post('/permission/store','permission.store',PermissionStoreController::class)
    ->post('/permission/update/{id}','permission.update',PermissionupdateController::class)
    ->post('/point_rule/update/{id}','point_rule.update',PointruleController::class)
    ->post('/custom-signup', 'custom-signup',CustomSignupController::class)
    ->post('/update-password', 'update.password',UpdatePasswordController::class)
    ->post('/question/store','question/store',QuestionController::class)
    ->post('/check-password', 'check-password', CheckPasswordController::class)


    ->post('/question/verify','question/verify',VerifySecurityQuestionsController::class),


    (new ExtendEvent())
    ->subscribe(PostEventSubscriber::class)
    ->subscribe(AvatarChangedEvents::class)
    ->subscribe(DiscussionEvent::class),

    (new Extend\Event())
    ->listen(Registered::class, Listeners\PostRegisterOperations::class)
    ->listen(UserSaving::class, Listeners\SidValidationRules::class),

];
