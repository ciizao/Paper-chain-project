const Product = require('./product');

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, detail, price, category, brand, stock, image_url } = req.body;

    // Search for the product in the database
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update all fields
    await product.update({ name, detail, price, category, brand, stock, image_url });

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

module.exports = { updateProduct };
