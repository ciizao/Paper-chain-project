const express = require("express");
const sequelize = require("./config/database");
const productRoutes = require("./router/routes"); 

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

sequelize.sync()
  .then(() => console.log("Database synchronized"))
  .catch(err => console.error("Database connection error:", err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



