const axios = require("axios");
require("dotenv").config();

const STOCK_UPDATE_URL = process.env.STOCK_UPDATE_URL;

// Función para restaurar stock
async function restoreStock(orderItems) {
    try {
        if (!Array.isArray(orderItems)) {
            console.error("Error: orderItems is not an array", orderItems);
            return false;
        }

        for (let item of orderItems) {
            console.log(`Restoring stock for product: ${item.product_id}, quantity: ${item.quantity}`);

            await axios.post(STOCK_UPDATE_URL, {
                product_id: item.product_id,
                quantity: item.quantity
            });
        }
        return true;
    } catch (error) {
        console.error("Error restoring stock:", error);
        return false;
    }
}

module.exports = { restoreStock };



