var express = require('express');
var router = express.Router();
var mysql = require('mysql');   
var test='';
var count=0;

'use strict';
var PdfTable = require('voilab-pdf-table');
var PDFDocument, doc;
// var fs = require('fs');
PDFDocument = require('pdfkit');
doc = new PDFDocument();
table = new PdfTable(doc, {
                bottomMargin: 30
            });





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


//table


    table
            // add some plugins (here, a 'fit-to-width' for a column)
            .addPlugin(new (require('voilab-pdf-table/plugins/fitcolumn'))({
                column: 'description'
            }))
            // set defaults to your columns
            .setColumnsDefaults({
                headerBorder: 'B',
                align: 'right'
            })
            // add table columns
            .addColumns([
                {
                    id: 'description',
                    header: 'Product',
                    align: 'left'
                },
                {
                    id: 'quantity',
                    header: 'Quantity',
                    width: 50
                },
                {
                    id: 'price',
                    header: 'Price',
                    width: 40
                },
                {
                    id: 'total',
                    header: 'Total',
                    width: 70,
                    renderer: function (tb, data) {
                        return 'CHF ' + data.total;
                    }
                }
            ])

            // add events (here, we draw headers on each new page)
         //   .onPageAdded(function (tb) {
           //     tb.addHeader();
            //});
 
        // if no page already exists in your PDF, do not forget to add one
      //  doc.addPage();
 
        // draw content, by passing data to the addBody method
//        table.addBody([
  //          {description: `${count}`, quantity: 1, price: 20.10, total: 20.10}
            
    //    ]);
 
 //       return doc;
// table.addBody([{description: 'Product 2', quantity: 4, price: 4.00, total: 16.00},
//            {description: 'Product 3', quantity: 2, price: 17.85, total: 35.70}]);


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
                    doc.fontSize(13);
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
                    if(count>0){doc.addPage();}
                    test=json[i].username;
                    content=json[i].email;
                    count=count+1;

//table


                    table.addBody([{description: `${json[i].username}`, quantity: 1, price: 20.10, total: 20.10}
                    ]);               
                    table.onPageAdd(function (table, row, ev) {
    // do something like
                    table.doc.addPage();
    // cancel event so the automatic page add is not triggered
                        ev.cancel = true;
                    });
                    //console.log(test);


                             //   doc.fontSize(13).text("Grievance Cell Report for the month"+"  "+monthInWords+" - "+dateToCheck.getFullYear(),{align:'left'})
                              //  doc.moveDown();
//                                doc.fontSize(13).text("Letters : "+test.length);

//WORKING PDF
/*                                doc.moveDown();
                              //  doc.text("Number of grievances resolved : ");

                                doc.fontSize(13).text(`User : ${test}`);
                                doc.fontSize(13).text(`Email : ${content}`);

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
                                doc.fontSize(7).text("CGPU,College Of Engineering Trivandrum",70,doc.page.height-15,{lineBreak:false})
                                doc.moveDown(0)

*/ 
//WORKING PDF 

//table


                }
                
doc.fontSize(13).text(`no.of ${count}`);


doc.end();
                                
              

    });
                        
});


    console.log(test);
});
module.exports = router;
