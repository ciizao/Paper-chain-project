const express = require("express");
const { searchProducts } = require("./searchController");

const router = express.Router();

router.get("/search", searchProducts);

module.exports = router;
