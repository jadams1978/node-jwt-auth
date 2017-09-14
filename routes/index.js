var express = require('express');
var router = express.Router();
var USERS = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  res.render('home', { title: 'dog' });
});
router.get('/create-league', function(req, res, next) {
  console.log(req.body);
  res.render('create', { title: 'dog' });
});
router.get('/signup', function(req, res, next) {
  res.render('index', { title: 'test' });
});
router.get('/leagues', function(req, res, next) {
  res.render('league', { title: 'test' });
});
router.get('/all', function(req, res, next) {
  console.log(USERS);
  res.render('all', { users: USERS });

});
router.get('/profile', function(req, res, next) {
  console.log(req.body);
  res.render('profile', { title: 'dog' });
});
module.exports = router;
