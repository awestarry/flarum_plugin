<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\WikiCategory;
use Sidtechno\Customlogin\Model\WikiSubCategory;
class CategoryController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $slug = $request->getAttribute('routeParameters')['slug'];
        $query = $request->getQueryParams()['q'] ?? null;

        $category = WikiCategory::where('name', $slug)->first();
        if (!$category) {
            return new JsonResponse(['message' => 'Category not found'], 404);
        }
        $subcategories = $category->subcategories();  // Assuming you have a relation named `subcategories` in your WikiCategory model

        if ($query) {
            $subcategories = $subcategories->where('name', 'LIKE', '%' . $query . '%');
        }

        $subcategories = $subcategories->get();

        return new JsonResponse(['data' => $subcategories->toArray()], 200);
    }

}
