const Cart = require("../models/cartModel");
const { getProductDetails } = require("../services/productService");
const { checkStock } = require("../services/inventoryService");

const addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user ? req.user.user_id : null;

  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized access. User ID is missing." });
  }

  try {
    const product = await getProductDetails(product_id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const stockAvailable = await checkStock(product_id);
    if (stockAvailable < quantity) {
      return res.status(400).json({ error: "Insufficient stock" });
    }

    let cart = await Cart.findOne({ user_id });
    if (!cart) {
      cart = new Cart({ user_id, items: [], total_price: 0 });
    }

    const existingItem = cart.items.find((item) => item.product_id === product_id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product_id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      });
    }

    cart.total_price = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    cart.updated_at = new Date();

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getCartByUser = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const cart = await Cart.findOne({ user_id });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.json(cart);
  } catch (error) {
    console.error("Error retrieving cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const deleteCartByUser = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const cart = await Cart.findOneAndDelete({ user_id });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.json({ message: "Cart successfully deleted" });
  } catch (error) {
    console.error("Error deleting cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addToCart, getCartByUser, deleteCartByUser };





