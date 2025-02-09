const Order = require("../models/order");
const OrderItem = require("../models/orderItem");
const { restoreStock } = require("../services/stockService");

exports.cancelOrder = async (req, res) => {
    try {
        const { order_id } = req.params;

        // 🔹 Asegurar que Sequelize cargue los productos correctamente
        const order = await Order.findOne({
            where: { id: order_id },
            include: [{ model: OrderItem, as: "orderItems" }], // 🔹 Agregar "as: orderItems"
        });

        console.log("Order Retrieved:", order);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        if (order.status === "Cancelled") {
            return res.status(400).json({ error: "Order is already cancelled" });
        }

        if (order.status === "Completed") {
            return res.status(400).json({ error: "Cannot cancel a completed order" });
        }

        const orderItems = order.getDataValue("orderItems");
        console.log("OrderItems Retrieved:", orderItems);

        // Validar si hay productos en el pedido
        if (!Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ error: "No items found in the order to restore stock" });
        }

        // Restaurar stock
        const stockRestored = await restoreStock(orderItems);
        if (!stockRestored) {
            return res.status(500).json({ error: "Failed to restore stock" });
        }

        // Actualizar estado del pedido
        order.status = "Cancelled";
        await order.save();

        res.json({ message: "Order cancelled and stock restored successfully", order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error cancelling order" });
    }
};
