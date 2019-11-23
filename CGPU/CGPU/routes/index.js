var express = require('express');
var router = express.Router();
var registerPeople = require('./register')
var generateReport = require('./report')
/* GET home page. */
router.get('/register', (req, res) => {
  res.send('Register');
});


router.get('/report', (req, res) => {
  res.send('Register');
});



router.use('/register',registerPeople);
router.use('/report',generateReport);

module.exports = router;
