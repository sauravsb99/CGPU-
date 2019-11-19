var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');



var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'sauravsb99',
	password : '',
	database : 'nodelogin'
});


router.get('/', function(req, res, next) {
  res.send('Generator');
});


router.post('/',(req,res)=>{
    var username = req.body.username;
    var limit = req.body.limit;
    var email="test";
    var password="test@test";
    var hashedPassword = bcrypt.hashSync(password);


    var i = 0;
    var userid=0;

   

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // console.log(limit);
        for(i = 0 ; i < limit ; i++){
          var sql = "INSERT INTO accounts (username,password,email) VALUES (?, ?, ?)";
          connection.query(sql,[username+i,hashedPassword,email],function (err, result) {
            if (err) throw err;
            console.log(result);
            // console.log(result.insertId);

            userid=result.insertId;
                     // var userid;
            // console.log(result);

                var token = jwt.sign({ id: userid }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
                });
            // console.log(token);
        //   res.status(200).send({ auth: true, token: token });

          });
        }
          
    });
    

res.end();
});


module.exports = router;