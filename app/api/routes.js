var express = require('express');
var router = express.Router();

router
  .route('/')
  .get(function(req, res){
    res.render('index', {title: 'BetaPod', condition: false, css: ['index.css']})
  });

router
  .route('/login')
  .get(function(req, res){
    res.render('login', {title: 'Login to BetaPod', condition: false, css: ['login.css']})
  });

router
  .route('/products')
  .get(function(req, res){
    res.render('products', {title: 'BetaPod Products', condition: false, css: ['shop-homepage.css']})
  });

router
  .route('/help')
  .get(function(req, res){
    res.render('help', {title: 'BetaPod Help', condition: false})
  });

module.exports = router
