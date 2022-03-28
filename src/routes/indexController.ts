import express from 'express';
var indexController = express.Router();

/* GET home page. */
indexController.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default indexController;
