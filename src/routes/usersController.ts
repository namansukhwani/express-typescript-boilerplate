import express from 'express';
var usersController = express.Router();

/* GET users listing. */
usersController.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default usersController;
