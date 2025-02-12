const axios = require("axios");

const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL;

const createOrder = async (orderData, token) => {
    const response = await axios.post(`${ORDER_SERVICE_URL}/api/order/create`, orderData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

module.exports = { createOrder };

