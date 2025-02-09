const mongoose = require("mongoose");

const mongoURI = "mongodb://mongoAdmin:neFEsh162013@44.200.5.82:27017/cartDB?authSource=admin";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
