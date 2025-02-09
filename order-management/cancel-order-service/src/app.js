const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cancelOrderRoutes = require("./routes/cancelOrderRoutes");
const sequelize = require("./config/database");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", cancelOrderRoutes);

// Sincronizar base de datos
sequelize.sync().then(() => {
  console.log("Database synchronized");
});

module.exports = app;
