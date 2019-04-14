const Restaurant = require('../model/restaurant');

function RestaurantsIndex(req, res, next) {
  Restaurant
    .find()
    .exec()
    .then(Restaurants => res.json(Restaurants))
    .catch(next);
}

function RestaurantsCreate(req, res, next) {
  Restaurant
    .create(req.body)
    .then(Restaurant => res.status(201).json(Restaurant))
    .catch(next);
}

function RestaurantsShow(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((Restaurant) => {
      if(!Restaurant) return res.notFound();
      res.json(Restaurant);
    })
    .catch(next);
}

module.exports = {
  index: RestaurantsIndex,
  create: RestaurantsCreate,
  show: RestaurantsShow
};
