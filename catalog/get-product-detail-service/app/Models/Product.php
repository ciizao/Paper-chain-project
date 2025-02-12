<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model {
    protected $table = 'Products';
    protected $primaryKey = 'id';
    public $incrementing = false; 
    protected $keyType = 'string'; 

    protected $fillable = [
        'id', 'name', 'detail', 'price', 'category', 'brand', 'stock', 'image_url'
    ];
}
