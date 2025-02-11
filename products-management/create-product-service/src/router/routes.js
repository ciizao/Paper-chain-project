const express = require("express");
const { createProduct } = require("../controllers/controller");

const router = express.Router();

router.post("/create-product", createProduct);

module.exports = router;

router.get("/test", (req, res) => {
    res.status(200).send("Test endpoint working!");
});
