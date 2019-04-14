const router = require("express").Router();
const auth = require("../backend/auth.js");
const orders = require("../backend/order.controller.js");
const users = require("../backend/user.controller.js");

router.route("/login").post(auth.login);
router.route("/orders").get(orders.index);
router.route("/orders/new").post(orders.create);
router.route("/users/:id").get(users.show);

module.exports = router;
