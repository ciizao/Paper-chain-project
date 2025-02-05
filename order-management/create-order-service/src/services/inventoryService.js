const axios = require("axios");
require("dotenv").config(); 

const STOCK_QUERY_URL = process.env.STOCK_QUERY_SERVICE_URL;
const STOCK_RESERVATION_URL = process.env.STOCK_RESERVATION_SERVICE_URL;

async function checkStock(product_id, quantity) {
    try {
        const response = await axios.get(`${STOCK_QUERY_URL}/${product_id}`);
        
        console.log("Stock Response:", response.data);

        const availableStock = response.data.stock;
        return availableStock >= quantity;
    } catch (error) {
        console.error(`Error checking stock for product ${product_id}:`, error.response?.data || error.message);
        return false;
    }
}

async function reserveStock(product_id, quantity) {
    try {
        await axios.post(STOCK_RESERVATION_URL, { product_id, quantity });
        return true;
    } catch (error) {
        console.error(`Error reserving stock for product ${product_id}:`, error.response?.data || error.message);
        return false;
    }
}

module.exports = { checkStock, reserveStock };

