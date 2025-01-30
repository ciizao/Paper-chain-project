const express = require("express");
const sequelize = require("./database");
const productRoutes = require("./routes"); // Importa las rutas

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

sequelize.sync()
  .then(() => console.log("Database synchronized"))
  .catch(err => console.error("Database connection error:", err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



