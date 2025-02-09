const Cart = require("../models/cartModel");
const { getProductDetails } = require("../services/productService");
const { checkStock } = require("../services/inventoryService");

const addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user ? req.user.user_id : null; // ✅ Cambiado a "user_id"

  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized access. User ID is missing." });
  }

  try {
    // Obtener detalles del producto
    const product = await getProductDetails(product_id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Verificar stock
    const stockAvailable = await checkStock(product_id);
    if (stockAvailable < quantity) {
      return res.status(400).json({ error: "Insufficient stock" });
    }

    // Buscar o crear el carrito del usuario en MongoDB
    let cart = await Cart.findOne({ user_id });
    if (!cart) {
      cart = new Cart({ user_id, items: [], total_price: 0 });
    }

    // Agregar producto al carrito
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

    // Recalcular total
    cart.total_price = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    cart.updated_at = new Date();

    // Guardar en MongoDB
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error("❌ Error adding product to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ Exportar correctamente la función `addToCart`
module.exports = { addToCart };





