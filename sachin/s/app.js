var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes')
var index = require('.routes/index');

app.use(cookieParser());
app.use(express.json());
app.use(app.router);
routes.initialize(app);
app.use(bodyParser.json());//parse application/x-www-form-urlencoded


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());
app.use('/', routes);
app.use('/index', index);
const Sequelize = require('sequelize');// initialize an instance of Sequelize
const sequelize = new Sequelize({
  database: 'users_db',
  username: 'root',
  password: '',
  dialect: 'mysql',
});// check the databse connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


router.get('/', function(req, res, next) {
  res.render('hey this worked');
});

router.get('/another/route', function(req, res, next) {
  res.json({ hello: 'world' });
});

module.exports = router;