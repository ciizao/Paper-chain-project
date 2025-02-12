const express = require("express");
const { addToCart, getCartByUser, deleteCartByUser } = require("../controllers/cartController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/cart/add", authenticateUser, addToCart);
router.get("/cart/user/:user_id", authenticateUser, getCartByUser);
router.delete("/cart/user/:user_id", authenticateUser, deleteCartByUser);

module.exports = router;



