require("dotenv").config();
const express = require("express");
const cors = require('cors');
const connectDB = require("./config/database");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(cors());

app.use(express.json());

connectDB();

app.use("/api", cartRoutes);

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Add-to-cart-service running on port ${PORT}`);
});


