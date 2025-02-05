const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
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
});

module.exports = Order;
