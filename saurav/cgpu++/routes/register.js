var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'sauravsb99',
	password : '',
	database : 'nodelogin'
});
router.get('/',(req,res)=>{
    res.send('Register Here');
});

router.post('/',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    connection.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          var sql = "INSERT INTO accounts (username,password,email) VALUES (?, ?, ?)";
          connection.query(sql,[username,password,email],function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
         

});
res.end();
});
module.exports = router;