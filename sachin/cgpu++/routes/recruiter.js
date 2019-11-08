var express = require('express');
var router = express.Router();
var mysql = require('mysql');



var con = mysql.createConnection({
	host     : 'localhost',
  user     : 'newuser',
  password : 'password',
	database : 'nodelogin'
});


router.get('/', function(req, res, next) {
    res.send('Recruiters register here');
  });


 router.post('/',(req,res)=>{
    // var username = req.body.username;
    // var password = req.body.password;   
    // var email = req.body.email;
    var business = req.body.business;
    var homepage = req.body.homepage;
    var contactperson = req.body.contactperson;
    var designation = req.body.designation;
    var address = req.body.address;
    var phone = req.body.phone;
    var email = req.body.email;
    var fax = req.body.fax;
    var tenth = req.body.tenth;
    var twelth = req.body.twelth;
    var bcutoff = req.body.bcutoff;
    var mcb = req.body.mcb;
    var salary = req.body.salary;
    var mnc = req.body.mnc;
    var bond = req.body.bond;


    con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          var sql = "INSERT INTO recruiterreg (business,homepage,contactperson,designation,address,phone,email,fax,tenth,twelth,bcutoff,mcb,salary,mnc,bond) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
          con.query(sql,[business,homepage,contactperson,designation,address,phone,email,fax,tenth,twelth,bcutoff,mcb,salary,mnc,bond],function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
         

});
res.end();
});



module.exports = router;