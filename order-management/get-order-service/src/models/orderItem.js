const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = require("./order");

const OrderItem = sequelize.define("orderItem", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  order_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Order,
      key: "id",
    },
  },
  product_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.hasMany(OrderItem, { foreignKey: "order_id", onDelete: "CASCADE" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

module.exports = OrderItem;
