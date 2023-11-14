<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\WikiCategory;
use Sidtechno\Customlogin\Model\WikiSubcategory;
use Sidtechno\Customlogin\Model\WikiPost;
use Flarum\Discussion\Discussion;
class CategoryPostController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (!$actor) {
            return new JsonResponse(['status' => false, 'error' => 'User not logged in.'], 403);
        }
        $id = $request->getAttribute('routeParameters')['id'];
        try {
            $sub_cate = WikiSubcategory::where('category_id', $id)->get();

            $posts = WikiPost::where('category_id', $id)->with('user')->get();
            foreach ($posts as $post) {
                $cate =  WikiCategory::find($post->category_id);
                $subcate =  WikiSubCategory::find($post->category_id);

                $post->category  = $cate->name ??'';
                $post->subcategory  = $subcate->name ??'';
                if(isset($actor->user->id) && $post->user_id == $actor->user->id){
                    $post->edit = true;
                    $post->delete = true;
                }else{
                    $post->edit = false;
                    $post->delete = false;
                }
            }

            $data['subcategory'] =  $sub_cate;
            $data['post'] = $posts;
            return new JsonResponse(['status' => true, 'data' => $data], 200);
        } catch (\Exception $e) {
            return new JsonResponse(['status' => false, 'error' => 'Failed to add to collection.'], 500);
        }
    }
}
