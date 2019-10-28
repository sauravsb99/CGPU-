var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
// var login = require('./routes/loginroutes');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'sauravsb99',
	password : '',
	database : 'nodelogin'
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	var email = request.body.email;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} 
			// else {
			// 	response.send('Incorrect Username and/or Password!');
			// }	
			else{

		// 		connection.connect(function(err) {
  // if (err) throw err;
  // console.log("Connected!");
  var sql = "INSERT INTO accounts (username,password,email) VALUES (?, ?,?)";
  connection.query(sql,[username,password,email],function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
// });
			}		
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

// var router = express.Router();
// // test route
// router.get('/', function(req, res) {
//     res.json({ message: 'welcome to our upload module apis' });
// });
// //route to handle user registration
// router.post('/register',login.register);
// router.post('/login',login.login)

app.listen(3000);