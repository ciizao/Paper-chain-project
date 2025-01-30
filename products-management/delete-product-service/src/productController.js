const Product = require('./product');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Search for the product in the database
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Delete the product
    await product.destroy();

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};

module.exports = { deleteProduct };
