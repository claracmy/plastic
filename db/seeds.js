const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const { dbURI } = require("../config/environment");
const Order = require("../model/orders");
const User = require("../model/users");

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

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(() => User.create(userData))
  .then(users => {
    console.log(`${users.length} users created!`);

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
        orderedBy: users[0]
      }
    ]);
  })
  .then(orders => console.log(`${orders.length} orders created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
