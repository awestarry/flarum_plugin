<?php

namespace Sidtechno\Customlogin\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Sidtechno\Customlogin\Model\WikiCategory;

class WikiControllerki implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $method = $request->getMethod();

        switch ($method) {
            case 'GET':
                if(isset($request->getAttribute('routeParameters')['id'])) {
                    $id = $request->getAttribute('routeParameters')['id'];
                    if ($id) {
                        return $this->show($id);
                    }
                }
                return $this->index($request);

            case 'POST':
                return $this->create($request);

            case 'PUT':
                $id = $request->getAttribute('routeParameters')['id'];
                return $this->update($id, $request);

            case 'DELETE':
                $id = $request->getAttribute('id');
                return $this->delete($id);

            default:
                return new JsonResponse(['message' => 'Method not allowed'], 405);
        }
    }

    public function index(ServerRequestInterface $request)
{
    $query = $request->getQueryParams()['q'] ?? null;  // Get the query parameter 'q' if it exists

    if ($query) {
        $categories = WikiCategory::where('name', 'LIKE', '%' . $query . '%')->get();
    } else {
        $categories = WikiCategory::all();
    }

    return new JsonResponse(['data' => $categories->toArray()], 200);
}


    public function show($id)
    {
        $category = WikiCategory::find($id);
        if (!$category) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }
        return new JsonResponse(['data' => $category->toArray()], 200);
    }

    public function create(ServerRequestInterface $request)
    {
        $data  = $request->getParsedBody();

        $validator = app('validator')->make($data, [
            'name'   => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'message' => false,
                'errors' => $validator->errors(),
            ], 422);
        }
        $category = WikiCategory::create($data);
        return new JsonResponse(['data' => $category->toArray()], 201);
    }

    public function update($id, ServerRequestInterface $request)
    {
        $category = WikiCategory::find($id);
        if (!$category) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }
        $data = $request->getParsedBody();
        $category->update($data);
        return new JsonResponse(['data' => $category->toArray()], 200);
    }

    public function delete($id)
    {
        $category = WikiCategory::find($id);
        if (!$category) {
            return new JsonResponse(['message' => 'Not found'], 404);
        }
        $category->delete();
        return new JsonResponse(['message' => 'Deleted successfully'], 200);
    }
}
