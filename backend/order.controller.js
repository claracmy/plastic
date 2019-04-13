const Order = require('../model/orders');

function ordersIndex(req, res, next) {
  Order
    .find()
    .exec()
    .then(orders => res.json(orders))
    .catch(next);
}

function ordersCreate(req, res, next) {

  req.body.orderedBy = req.currentUser;

  Order
    .create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next);
}

function ordersShow(req, res, next) {
  Order
    .findById(req.params.id)
    .exec()
    .then((order) => {
      if(!order) return res.notFound();
      res.json(order);
    })
    .catch(next);
}

module.exports = {
  index: ordersIndex,
  create: ordersCreate,
  show: ordersShow
};
