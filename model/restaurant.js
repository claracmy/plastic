const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String},
    rating: {type: String},
    numberOfOrders: {type: Number},
    totalplasticUsage: {
        cutlery: {type: Number},
        container: {type: Number},
        bag: {type: Number},
        bottle: {type: Number},
        straw: {type: Number},
        wrap: { type: Number}
    }
}
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
