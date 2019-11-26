var express = require('express');
var router = express.Router();
var registerPeople = require('./register')
var generateReport = require('./report')
var authentification = require('./auth')
var administrator = require('./admin')
// var passport = require('passport')
require('../middlewares/passport')
/* GET home page. */
router.get('/register', (req, res) => {
  res.send('Registerss');
});


router.get('/report', (req, res) => {
  res.send('Register');
});

router.get('/auth', (req, res) => {
  res.send('Authentification');
});

router.get('/admin', (req, res) => {
  res.send('Administrator');
});
// app.get('/a', function(request, response) {
// 	response.sendFile(path.join(__dirname + ''));
// });
router.use('/register',registerPeople);
router.use('/report',generateReport);
router.use('/auth',authentification);
router.use('/admin',administrator);

module.exports = router;
