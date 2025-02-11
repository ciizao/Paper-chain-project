const express = require('express');
const { updateProduct } = require('../controllers/productController');
const router = express.Router();

router.put('/products/:id', updateProduct);

module.exports = router;
