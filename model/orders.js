const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true },
    orderedBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    plasticUsage: {
      cutlery: { type: Number },
      container: { type: Number },
      bag: { type: Number },
      bottle: { type: Number },
      straw: { type: Number },
      wrap: { type: Number }
    },
    cutlery: { type: Boolean, required: true },
    additionalInfo: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", orderSchema);
