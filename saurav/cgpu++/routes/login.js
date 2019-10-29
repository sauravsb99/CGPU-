var express = require('express');
var router = express.Router();
var mysql = require('mysql');


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




router.get('/', function(req, res, next) {
    res.send('Login');
  });

router.post('/', function(req, res) {
    var username = req.body.username;
    // res.send(username);
	var password = req.body.password;
    // var email = req.body.email;
    // res.send(password);
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
                // res.redirect('/home');
                res.send('Login succesfull')
			} 
			else {
				res.send('Incorrect Username and/or Password!');
// 			}	
// 			else{

// 				connection.connect(function(err) {
//   if (err) throw err;
//   // console.log("Connected!");
// //   var sql = "INSERT INTO accounts (username,password,email) VALUES (?, ?,?)";
// //   connection.query(sql,[username,password,email],function (err, result) {
// //     if (err) throw err;
// //     console.log("1 record inserted");
// //   });
// });
			}		
			// res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		// res.end();
	}
});

module.exports = router;
