<?php
require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/ProductController.php';

use Slim\Factory\AppFactory;
use Slim\Middleware\ErrorMiddleware;

$app = AppFactory::create();
(require __DIR__ . '/../src/routes.php')($app);

$app->addErrorMiddleware(true, true, true);

$app->run();
?>
