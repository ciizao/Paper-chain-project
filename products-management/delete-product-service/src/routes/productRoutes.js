const express = require('express');
const { deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.delete('/products/:id', deleteProduct);

module.exports = router;
