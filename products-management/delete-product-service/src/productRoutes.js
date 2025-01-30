const express = require('express');
const { deleteProduct } = require('./productController');
const router = express.Router();

// Ruta para eliminar un producto por ID
router.delete('/products/:id', deleteProduct);

module.exports = router;
