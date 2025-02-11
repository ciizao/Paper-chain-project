const Product = require('../services/product');

const resolvers = {
  Query: {
    allProducts: async () => {
      try {
        return await Product.findAll();
      } catch (error) {
        console.error("Error fetching all products:", error);
        throw new Error("Error fetching all products");
      }
    },

    catalogProducts: async () => {
      try {
        return await Product.findAll({
          attributes: ['id', 'name', 'price', 'category', 'brand', 'image_url'],
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Error fetching products");
      }
    },
  },
};

module.exports = resolvers;
