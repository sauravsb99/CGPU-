var express = require('express');
var router = express.Router();
var registerPeople = require('./register')
var generateReport = require('./report')
var loginPeople = require('./Auth')
/* GET home page. */
router.get('/register', (req, res) => {
  res.send('Register');
});


router.get('/report', (req, res) => {
  res.send('Register');
});

router.get('/Auth', (req, res) => {
  res.send('Auth');
});

outer.use('/Auth',loginPeople);
router.use('/register',registerPeople);
router.use('/report',generateReport);

module.exports = router;
