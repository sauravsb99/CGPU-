var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');


var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'newuser',
	password : 'password',
	database : 'nodelogin'
});

router.get('/', function(req, res, next) {
    res.send('Login');
  });

router.post('/', function(req, res) {
  var username = req.body.username;
	var pass = req.body.password;
	if (username) {
		connection.query('SELECT * FROM accounts WHERE username = ?', [username], function(error, results, fields) {
			// console.log('help');
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
                // res.redirect('/home');
								// res.send(results.password);
								var string=JSON.stringify(results);
        				// console.log('>> string: ', string );
								var json =  JSON.parse(string);
        // console.log('>> json: ', json);
         password=json[0].password;
								// console.log(results[1]);
								
								var passwordIsValid = bcrypt.compareSync(pass,password);
								if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
								
								var token = jwt.sign({ id: username }, config.secret, {
									expiresIn: 86400 // expires in 24 hours
								});
								res.status(200).send({ auth: true, token: token });
			} 
			else {
				res.send('Incorrect Username and/or Password!');
			}
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
			// }		
			// res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		// res.end();
	}

	// var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
	// if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    
  //   var token = jwt.sign({ id: userid }, config.secret, {
  //     expiresIn: 86400 // expires in 24 hours
  //   });




});

module.exports = router;
