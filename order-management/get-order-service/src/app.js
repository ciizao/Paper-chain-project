const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes");
const sequelize = require("./config/database");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", orderRoutes);

// Sincronizar base de datos
sequelize.sync().then(() => {
  console.log("Database synchronized");
});

module.exports = app;
