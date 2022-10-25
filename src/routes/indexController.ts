import express from 'express';
const indexController = express.Router();

/* GET home page. */
indexController.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

export default indexController;
