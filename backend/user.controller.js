const User = require('../model/users');


function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('orders')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

module.exports = {

  show: usersShow
};
