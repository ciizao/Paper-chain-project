const Order = require("../models/order");
const OrderItem = require("../models/orderItem");

exports.getOrderById = async (req, res) => {
    try {
        const { order_id } = req.params;

        const order = await Order.findOne({
            where: { id: order_id },
            include: [{ model: OrderItem }],
        });

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving order" });
    }
};


exports.getOrdersByUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        const orders = await Order.findAll({
            where: { user_id },
            include: [{ model: OrderItem }],
        });

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving orders" });
    }
};
