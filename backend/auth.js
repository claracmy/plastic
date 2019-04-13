const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const User = require('../model/users');

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      console.log(user);
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });

      return res.json({ message: `Welcome ${user.name}`, token });
    })
    .catch(next);
}

function login(req, res, next) {
  User
    .findOneAndUpdate({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'Unauthorized' });

      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      user['currentToken'] = token;
      User.findOneAndUpdate({ email: req.body.email }, user, {'upsert': true});// Save token to database
      return res.json({ message: `Welcome back ${user.name}`, token });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
