const Product = require("../services/product");

const createProduct = async (req, res) => {
  try {
    const { id, name, detail, price, category, brand, stock, image_url } = req.body;

    if (!id || !name || !detail || !price || !category || !brand || !stock) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = await Product.create({ id, name, detail, price, category, brand, stock, image_url });
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProduct };


