const cartService = require("../services/cartService");
const orderService = require("../services/orderService");

const processCheckout = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const userId = req.user.user_id;

        const cart = await cartService.getCart(userId, token);
        if (!cart.items || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const orderData = {
            user_id: userId,
            items: cart.items.map(item => ({
                product_id: item.product_id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            total_price: cart.total_price
        };

        const orderResponse = await orderService.createOrder(orderData, token);
        if (!orderResponse.success) {
            return res.status(500).json({ message: "Order creation failed" });
        }
        
        await cartService.clearCart(userId, token);

        res.status(200).json({ message: "Checkout successful", order: orderResponse });

    } catch (error) {
        console.error("Checkout Error:", error);
        res.status(500).json({ message: "Checkout process failed", error: error.message });
    }
};

module.exports = { processCheckout };

