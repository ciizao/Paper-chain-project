const Order = require("../models/order");
const OrderItem = require("../models/orderItem");
const { checkStock, reserveStock } = require("../services/inventoryService");

exports.createOrder = async (req, res) => {
    try {
        const { user_id, items, total_price } = req.body;

        if (!user_id) {
            return res.status(400).json({ error: "User ID is required" });
        }
        if (!items || items.length === 0) {
            return res.status(400).json({ error: "Order must contain at least one product" });
        }
        if (!total_price || total_price <= 0) {
            return res.status(400).json({ error: "Total price must be greater than 0" });
        }

        console.log("Received Order Request:", req.body);

        for (let item of items) {
            const isAvailable = await checkStock(item.product_id, item.quantity);
            console.log(`Checking stock for ${item.product_id}: Available = ${isAvailable}`);

            if (!isAvailable) {
                return res.status(400).json({ error: `Stock not available for product ${item.product_id}` });
            }
        }

        for (let item of items) {
            const stockReserved = await reserveStock(item.product_id, item.quantity);
            console.log(`Reserving stock for ${item.product_id}: Success = ${stockReserved}`);

            if (!stockReserved) {
                return res.status(500).json({ error: `Failed to reserve stock for product ${item.product_id}` });
            }
        }

        const order = await Order.create({ user_id, total_price });

        const orderItems = await Promise.all(
            items.map(async (item) => {
                return await OrderItem.create({
                    order_id: order.id,
                    product_id: item.product_id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                });
            })
        );

        console.log("Order Created Successfully:", order);

        res.status(201).json({
            order_id: order.id,
            status: order.status,
            total_price: order.total_price,
            items: orderItems,
        });
    } catch (error) {
        console.error("Error in createOrder:", error);
        res.status(500).json({ error: "Error creating order" });
    }
};



