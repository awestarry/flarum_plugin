<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;
use Sidtechno\Customlogin\Model\Wikilike;

use Flarum\Notification\NotificationSyncer;
use Sidtechno\Customlogin\Notifications\ArticleLikedBlueprint;
use Sidtechno\Customlogin\Model\WikiPost;

class PostlikeController implements RequestHandlerInterface
{
    /**
     * {@inheritdoc}
     */
    public function handle(ServerRequestInterface $request): ResponseInterface {
        $actor = $request->getAttribute('actor');
        if (!$actor->id) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }

        $postId = $request->getAttribute('routeParameters')['id'];

        $existing = Wikilike::where('wiki_articles_id', $postId)->where('user_id', $actor->id)->first();

        if ($existing) {

            $existing->delete();
            return new JsonResponse(['message' => true, 'data' => 'Delete Successful'], 200);
        } else {




            $like = new Wikilike;
            $like->wiki_articles_id = $postId;
            $like->user_id = $actor->id;
            $like->reaction_type = 0;
            $like->save();

            // $article = WikiPost::find($postId);
            // $blueprint = new ArticleLikedBlueprint($article,$actor);
            // $usersToNotify = [$article->user];
            // $notificationSyncer = resolve(NotificationSyncer::class);
            // $notificationSyncer->sync($blueprint, $usersToNotify);

            return new JsonResponse(['message' => true, 'data' => $like->toArray()], 200);
        }


    }
}
