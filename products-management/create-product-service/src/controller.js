const Product = require("./product");

const createProduct = async (req, res) => {
  try {
    const { id, name, detail, price, category, stock } = req.body;

    if (!id || !name || !detail || !price || !category || !stock) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = await Product.create({ id, name, detail, price, category, stock });
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProduct };
