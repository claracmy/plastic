const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  numberOfOrders: { type: Number },
  vouchersAvailable: { type: Number },
  orders: []
});

module.exports = mongoose.model("User", userSchema);
