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
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
								var string=JSON.stringify(results);
								var json =  JSON.parse(string);
         password=json[0].password;
					
								
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

		});
	} else {
		res.send('Please enter Username and Password!');
	}

});

module.exports = router;
