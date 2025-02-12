require("dotenv").config();
const express = require("express");
const cors = require("cors");

const checkoutRoutes = require("./routes/checkoutRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/checkout", checkoutRoutes);

const PORT = process.env.PORT || 8087;
app.listen(PORT, () => {
    console.log(`Checkout Service is running on port ${PORT}`);
});
