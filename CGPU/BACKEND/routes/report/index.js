const express = require('express')
const router  = express.Router()
const studentMethods = require('../../methods/student')
const uid = require('uniqid')
const multer  = require('multer')
var path = require('path');
const fs = require('fs')
const PDFDocument = require('pdfkit');



router.post('/print',(req,res)=>{
    var date = req.body.date;
    studentMethods.getAllStudents()
	.then((doc) => {
        // console.log('sad')
		var data = []
		var id = 1
		var placed = 0
		doc.forEach(element => {
					data.push({
						'id': id++,
                        'std_id': element.people_id,
                        'admission': element.admission_no,
                        'department': element.department,
                        'place1': element.place1,
                        'place2': element.place2,
                        'place3': element.place3,
						// 'title':element.title,
						// 'remark':element.remark,
						// 'status':element.status,
						// 'userid':element.user_id
					})
					if(element.place1 != null){
						placed += 1;
					}
				
			
		});
		// console.log(placed)
		const document = new PDFDocument;
		document.pipe(res);
		document.fontSize(25).text("College Of Engineering Trivandrum",{align:'center'})
		document.moveTo(10,100)                               // set the current pointtitle
		.lineTo(document.page.width-10,100)                            // draw a line
  		.stroke(); 
		document.moveDown(2);
		document.fontSize(13).text("CGPU REPORT"+date,{align:'left'})
		document.moveDown();
		document.fontSize(13).text("Number of students : "+data.length)
		document.moveDown();
		document.text("Number of students placed : "+placed)
		document.moveDown();
		document.fontSize(10).text("Sl.No                 UserId                        Title              Status",{align:'left'});
		
		document.moveDown(0)
		document.moveTo(document.x,document.y)                               // set the current point
		.lineTo(document.page.width-70,document.y)                            // draw a line
		.stroke();
	    document.moveDown(0)
		// for( i=0 ;i<data.length;i++){
		// 	console.log( data[i].remark);
		// 	document.fontSize(10).text(data[i].id+"      "+data[i].std_id+"      "+data[i].admission+"         "+data[i].department,{align:'left'});
		// }
		// document.moveTo(10,document.page.height-18)                               // set the current point
		// .lineTo(document.page.width-10,document.page.height-18)                            // draw a line
  		// .stroke();
		document.fontSize(7).text("CGPU ,College Of Engineering Trivandrum",90,document.page.height-15,{lineBreak:false})
		document.end();
	})
	.catch((err)=>{
		res.json({
			'success':false,
			'error':"ivideeeee"
		})
	})
})

module.exports = router