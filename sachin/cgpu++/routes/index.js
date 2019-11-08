var express = require('express');
var router = express.Router();
var app=express();
var server='localhost:3000'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CGPU++' });
});



app.get('/', (req, res) => {
  res.send('Hello from the main application');
});

const reportingApp = express();
app.use('/reporting', reportingApp);


module.exports = router;
