const Product = require('./product');

const resolvers = {
  Query: {
    products: async () => {
      try {
        return await Product.findAll({
          attributes: ['id', 'name', 'price', 'category', 'stock'],
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Error fetching products");
      }
    },
  },
};

module.exports = resolvers;
