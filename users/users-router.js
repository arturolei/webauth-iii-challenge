const router = require('express').Router();

const Users = require('./users-model.js');
const validate = require('../auth/validation-middleware.js');

router.get('/', validate, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});



module.exports = router;
