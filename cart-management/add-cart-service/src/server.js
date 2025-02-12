require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/api", cartRoutes);

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Add-to-cart-service running on port ${PORT}`);
});


