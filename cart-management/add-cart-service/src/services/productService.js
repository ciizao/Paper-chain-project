const axios = require("axios");
require("dotenv").config();

const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${process.env.PRODUCT_DETAIL_SERVICE}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching product details:", error);
    return null;
  }
};

module.exports = { getProductDetails };

