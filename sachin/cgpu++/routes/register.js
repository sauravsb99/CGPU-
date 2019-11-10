var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// let jwt = require('jsonwebtoken');
// let config = require('../config');


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');



// const secret="saurav";
var connection = mysql.createConnection({
	host     : 'localhost',
  user     : 'newuser',
  password : 'password',
	database : 'nodelogin'
});
// router.get('/',(req,res)=>{
//     res.send('Register Here');
// });

router.post('/',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var hashedPassword = bcrypt.hashSync(password);
    var email = req.body.email;
    
  // }); 
    // let token = jwt.sign({username: username},
    //   config.secret,
    //   { expiresIn: '24h' // expires in 24 hours
    //   }
    // );
    // // return the JWT token for the future API calls
    // res.json({
    //   success: true,
    //   message: 'Authentication successful!',
    //   token: token
    // });
//   } else {
//     res.send(403).json({
//       success: false,
//       message: 'Incorrect username or password'
//     });
//   }
// } else {
//   res.send(400).json({
//     success: false,
//     message: 'Authentication failed! Please check the request'
//   });
    var userid=0;
    connection.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          var sql = "INSERT INTO accounts (username,password,email) VALUES (?, ?, ?)";
          connection.query(sql,[username,hashedPassword,email],function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            // console.log(result.insertId);

            userid=result.insertId;
                     // var userid;
          console.log(userid);

          var token = jwt.sign({ id: userid }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
          console.log(token);
          // res.status(200).send({ auth: true, token: token });
          });


});
res.end();
});


router.get('/', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    res.status(200).send(decoded);
  });
});

// router.get('/me', function(req, res) {
//   var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(token, config.secret, function(err, decoded) {
//     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
//     res.status(200).send(decoded);
//   });
// });


module.exports = router;