const express = require("express");
const router = express.Router();
const { cancelOrder } = require("../controllers/cancelOrderController");

router.put("/order/cancel/:order_id", cancelOrder);

module.exports = router;

