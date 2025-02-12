const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/cartDB?authSource=${process.env.DB_AUTH_SOURCE}`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("MongoDB successfully connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;




