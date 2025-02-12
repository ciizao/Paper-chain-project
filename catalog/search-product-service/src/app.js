const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const searchRoutes = require("./routes/searchRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", searchRoutes);

app.listen(config.port, () => {
    console.log(`Search Product Service running on port ${config.port}`);
});

