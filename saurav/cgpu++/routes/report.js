var express = require('express');
var router = express.Router();
var mysql = require('mysql');   



var PDFDocument, doc;
// var fs = require('fs');
PDFDocument = require('pdfkit');
doc = new PDFDocument();
// doc.pipe(fs.createWriteStream('output.pdf'));
// PDF Creation logic goes here
// doc.end();
var filename='test.pdf';    


var datetime = new Date();


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

    var title        = "Report";

    var test="";
    connection.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "SELECT username FROM  accounts ";
                connection.query(sql,function (err, result) {
                  if (err) throw err;
                //   console.log(result);
                  var string=JSON.stringify(result);
            				// console.log('>> string: ', string );
                  var json =  JSON.parse(string);
                  
                //   var username=json.username;
                // console.log(json[70]);
                // console.log(json);
                var i;
                for (i=0;i<json.length;i++){
                    test=test+json[i].username;
                    // doc.text(json[i].username, {
                    //     width: 410,
                    //     align: 'left'
                    // });
                    console.log(test);
                }
    
                    // username="ss";
    
                  
    
    
                });
    
    
    
            });


            // console.log("content");

            // var content = test;
            var content      = "testsasauravsb99sadassauravsbsazsazsazsazsazsazsazsazsazsazsazasazasazasasazasasazasasazasasazasasazasasazasasazasasazasasazasasazasasazasasazasasazasasazasat";
    // var publish_date = datetime;
    // var author_name  = "CGPU++";
    // var link         = "www.cet.ac.in";
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');
      doc.font('Times-Roman', 18)
        .fontSize(25)
        .text(title, 100, 50);
    //   doc.fontSize(15)
    //      .fillColor('blue')
    //      .text('Read Full Article', 100, 100)
    //      .link(100, 100, 160, 27, link);
    //   doc.moveDown()
    //      .fillColor('red')
    //      .text("Author: "+author_name);
      
    //   doc.moveDown()
    //      .fillColor('black')
    //      .fontSize(15)
    //      .text(content, {
    //        align: 'justify',
    //        indent: 30,
    //        height: 300,
    //        ellipsis: true
    //      });

        doc.text(content,250,5000);
      
     doc.pipe(res);
      
     doc.end();


    
    // if( option = 1){
    
    //     connection.connect(function(err) {
    //         if (err) throw err;
    //         console.log("Connected!");
    //         var sql = "SELECT username FROM  accounts ";
    //         connection.query(sql,function (err, result) {
    //           if (err) throw err;
    //         //   console.log(result);
    //           var string=JSON.stringify(result);
    //     				// console.log('>> string: ', string );
    //           var json =  JSON.parse(string);
              
    //         //   var username=json.username;
    //         // console.log(json[70]);
    //         var i;
    //         for (i=0;i<json.length;i++){

    //             doc.text(json[i].username, {
    //                 width: 410,
    //                 align: 'left'
    //             });
    //             // console.log(json[i].username);
    //         }

    //             // username="ss";

              


    //         });



    //     });
    // }
        
});
module.exports = router;
