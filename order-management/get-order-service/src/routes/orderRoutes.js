const express = require("express");
const router = express.Router();
const { getOrderById, getOrdersByUser } = require("../controllers/orderController");

router.get("/order/:order_id", getOrderById);
router.get("/order/user/:user_id", getOrdersByUser);

module.exports = router;
