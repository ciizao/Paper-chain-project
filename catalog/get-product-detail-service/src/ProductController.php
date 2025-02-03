<?php
require __DIR__ . '/database.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

function getProductDetail(Request $request, Response $response, array $args) {
    $id = $args['id'];

    try {
        $db = getConnection();

        $stmt = $db->prepare('SELECT id, name, detail, price, category, brand, stock, image_url FROM "Products" WHERE id = :id');
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $product = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$product) {
            $response->getBody()->write(json_encode(["error" => "Product not found"]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $response->getBody()->write(json_encode($product));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    } catch (Exception $e) {
        $response->getBody()->write(json_encode(["error" => "Internal Server Error"]));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
    }
}
