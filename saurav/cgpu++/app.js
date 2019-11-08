var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mysql = require('mysql');


var userLogin = require('./routes/login')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRegister = require('./routes/register')
var recruiterRegister = require('./routes/recruiter')
var IdGenerator = require('./routes/generate')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',userLogin);
app.use('/register',userRegister);
app.use('/recruiterregister',recruiterRegister);
app.use('/me',recruiterRegister);
app.use('/generates',IdGenerator);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'sauravsb99',
	password : '',
	database : 'nodelogin'
});




connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ... nn");
  } else {
      console.log("Error connecting database ... nn");
  }
  });







module.exports = app;
