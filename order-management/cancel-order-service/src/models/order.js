const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const OrderItem = require("./orderItem");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Pending", "Processing", "Completed", "Cancelled"),
    allowNull: false,
    defaultValue: "Pending",
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: "orders"
});

Order.hasMany(OrderItem, { foreignKey: "order_id", onDelete: "CASCADE", as: "orderItems" });
OrderItem.belongsTo(Order, { foreignKey: "order_id", as: "order" });

module.exports = Order;

