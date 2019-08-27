//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js');


module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token){
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) =>{
      if (err){
        //bad token 
        res.status(401).json({message:"something wrong with auth", err});
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({message: 'No token, no go'})
  }

};
