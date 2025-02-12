<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller {

    public function getProductDetail($id) {

        if (!preg_match('/^[a-zA-Z0-9\-_]+$/', $id)) {
            return response()->json(["error" => "Invalid product ID format"], 400);
        }

        $product = Product::find($id);

        if (!$product) {
            return response()->json(["error" => "Product not found"], 404);
        }

        return response()->json($product, 200);
    }
}

