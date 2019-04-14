const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const { dbURI } = require("../config/environment");
const Order = require("../model/orders");
const User = require("../model/users");
const Restaurant = require("../model/restaurant");

const userData = [
  {
    name: "Sheldon",
    lastName: "Cooper",
    email: "cooper@gmail.com",
    password: "password",
    passwordConfirmation: "password",
    currentToken: null
  }
];
const restaurant = [
  {
    name: "KFC - Soho",
    rating: "Bad",
    numberOfOrders: 200,
    totalplasticUsage: {
      cutlery: 50,
      container: 150,
      bag: 150,
      bottle: 10,
      straw: 0,
      wrap: 0
    }
  }
];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(() => User.create(userData))
  .then(users => {
    console.log(`${users.length} users created!`);
    Restaurant.create(restaurant);
    return Order.create([
      {
        plasticUsage: {
          cutlery: 4,
          container: 2,
          bag: 1,
          bottle: 0,
          straw: 0
        },
        cutlery: true,
        additionalInfo: "",
        restaurant: restaurant[0],
        orderedBy: users[0]
      }
    ]);
  })
  .then(orders => console.log(`${orders.length} orders created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
