const express = require('express');
const { updateProduct } = require('./productController');
const router = express.Router();

// Ruta para actualizar un producto por ID
router.put('/products/:id', updateProduct);

module.exports = router;
