const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  items: [
    {
      product_id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total_price: { type: Number, default: 0 },
  updated_at: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", CartSchema, "carts");

module.exports = Cart;
