const Product = require('./product');

// Eliminar un producto por ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar el producto en la base de datos
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Eliminar el producto
    await product.destroy();

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};

module.exports = { deleteProduct };
