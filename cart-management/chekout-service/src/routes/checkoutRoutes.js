const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkoutController");
const { authenticateUser } = require("../middleware/authMiddleware");

router.post("/", authenticateUser, checkoutController.processCheckout);

module.exports = router;
