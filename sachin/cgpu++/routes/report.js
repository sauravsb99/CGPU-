var express = require('express');
var router = express.Router();
var mysql = require('mysql');   
var test='';
var count=0;

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
	user     : 'newuser',
	password : 'password',
	database : 'nodelogin'
});


router.get('/', function(req, res, next) {
  res.send('Report');
});

    
router.post('/',(req,res)=>
{
    var option = req.body.option;

    var title        = "College Of Engineering Trivandrum";

doc.pipe(res);

res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

      doc.font('Times-Roman', 18)
        .fontSize(25)
        .text(title, 100, 50);

                                doc.moveTo(10,100)                               // set the current point
                                .lineTo(doc.page.width-10,100)                            // draw a line
                                  .stroke(); 
                                doc.moveDown(2);

    connection.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "SELECT * FROM  accounts ";
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
                    test=json[i].username;
                    count=count+1;
                    // doc.text(json[i].username, {
                    //     width: 410,
                    //     align: 'left'
                    // });

                    //console.log(test);


                             //   doc.fontSize(13).text("Grievance Cell Report for the month"+"  "+monthInWords+" - "+dateToCheck.getFullYear(),{align:'left'})
                              //  doc.moveDown();
                                doc.fontSize(13).text("Number of grievances recieved : "+test.length);
                                doc.moveDown();
                              //  doc.text("Number of grievances resolved : ");

                                doc.text(`Number of grievances resolved : ${test}`);

                               // for( i=0 ;i<json.length;i++){
                                //console.log(content[i]);
                                //doc.fontSize(10).text(content[i])};

                                doc.moveDown();
                                doc.fontSize(10).text("Sl.No                 UserId                        Title              Status",{align:'left'});
                                
                                doc.moveDown(0)
                                doc.moveTo(doc.x,doc.y)                               // set the current point
                                .lineTo(doc.page.width-70,doc.y)                            // draw a line
                                .stroke();
                                  doc.moveDown(0)

                              //  }
                                doc.moveTo(10,doc.page.height-18)                               // set the current point
                                .lineTo(doc.page.width-10,doc.page.height-18)                            // draw a line
                                  .stroke();
                                doc.fontSize(7).text("Grievance Cell,College Of Engineering Trivandrum",90,doc.page.height-15,{lineBreak:false})





                }
                    // console.log(test);
                    // username="ss";
doc.text(`no.of ${count}`);
doc.end();
                                
                  
    
    
                });
                                    
    
                                        
    
            });

            // console.log("content");

             var content = test;
    // var publish_date = datetime;
    // var author_name  = "CGPU++";
    // var link         = "www.cet.ac.in";
    
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
//test="hello";
    console.log(test);
//for( i=0 ;i<content.length;i++){
//      console.log( content[i]);
//      doc.text(content[3],250,5000);
//    }

        //doc.text(content,250,5000);
      

      
//doc.on('pageAdded', () => doc.text("Page Title"));
    
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
