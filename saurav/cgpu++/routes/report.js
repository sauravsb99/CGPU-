var express = require('express');
var router = express.Router();
var mysql = require('mysql');   



var PDFDocument, doc;
var fs = require('fs');
PDFDocument = require('pdfkit');
doc = new PDFDocument;
doc.pipe(fs.createWriteStream('output.pdf'));
// PDF Creation logic goes here
doc.end();




var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'sauravsb99',
	password : '',
	database : 'nodelogin'
});


router.get('/', function(req, res, next) {
  res.send('Report');
});


router.post('/',(req,res)=>
{
    var option = req.body.option;
    
    if( option = 1){
    
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "SELECT * FROM  accounts";
            connection.query(sql,function (err, result) {
              if (err) throw err;
            //   console.log(result);
              var string=JSON.stringify(result);
        				// console.log('>> string: ', string );
              var json =  JSON.parse(string);
              
            //   var username=json.username;
            // console.log(json[70]);
            if(json[70] = null)
                console.log('hi');

                username="ss";

              doc.text(username, {
                width: 410,
                align: 'left'
            });


            });



        });
    }
        
});
module.exports = router;
