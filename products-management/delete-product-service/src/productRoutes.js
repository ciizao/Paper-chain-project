const express = require('express');
const { deleteProduct } = require('./productController');
const router = express.Router();

router.delete('/products/:id', deleteProduct);

module.exports = router;
