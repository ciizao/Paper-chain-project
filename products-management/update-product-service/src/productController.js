const Product = require('./product');

// Modificar un producto por ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, detail, price, category, stock } = req.body;  // ✅ Se agregó "detail"

    // Buscar el producto en la base de datos
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Actualizar todos los campos
    await product.update({ name, detail, price, category, stock });

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

module.exports = { updateProduct };
