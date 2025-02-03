const express = require("express");
const cors = require("cors");
const config = require("./config");
const searchRoutes = require("./searchRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", searchRoutes);

// Iniciar el servidor
app.listen(config.port, () => {
    console.log(`🚀 Search Product Service running on port ${config.port}`);
});
