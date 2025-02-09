const axios = require("axios");
require("dotenv").config();

const checkStock = async (productId) => {
  try {
    const response = await axios.get(`${process.env.INVENTORY_SERVICE}/stock/${productId}`);
    return response.data.stock_available;
  } catch (error) {
    console.error("❌ Error checking stock:", error);
    return null;
  }
};

module.exports = { checkStock };

