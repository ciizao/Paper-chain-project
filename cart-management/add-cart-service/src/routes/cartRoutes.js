const express = require("express");
const { addToCart } = require("../controllers/cartController"); // ✅ Verifica esta línea
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/cart/add", authenticateUser, addToCart); // ✅ Aquí usa `addToCart` correctamente

module.exports = router;



