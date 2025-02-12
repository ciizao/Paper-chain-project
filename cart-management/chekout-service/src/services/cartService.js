const axios = require("axios");

const CART_SERVICE_URL = process.env.CART_SERVICE_URL;

const getCart = async (userId, token) => {
    const response = await axios.get(`${CART_SERVICE_URL}/api/cart/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

const clearCart = async (userId, token) => {
    await axios.delete(`${CART_SERVICE_URL}/api/cart/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

module.exports = { getCart, clearCart };


