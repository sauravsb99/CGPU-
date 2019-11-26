const express = require('express')
var studentMethods = require('../../../methods/student')
var peopleMethods = require('../../../methods/people')
const router  = express.Router()
var nodemailer = require('nodemailer');

router.post('/sent',(res,req)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sauravsb99@gmail.com',
          pass: 's kidilam'
        }
      });
      studentMethods.getAllStudents()
      .then((doc)=>{
        
        doc.forEach(element=>{
            // var mailOptions = {
            //     from: 'sauravsb99@gmail.com',
            //     to: element.email,
            //     subject: 'njana mwommuseee',
            //     text: `saaasasas`
            //   };
            //   console.log(element)
            peopleMethods.getPeopleByUsername(element.username)
            .then((info)=>{
                var mailOptions = {
                        from: 'sauravsb99@gmail.com',
                        to: info.email,
                        subject: 'njana mwommuseee',
                        text: `saaasasas`
                      };
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });
            })
            .catch((err)=>{
                res.json({
                    'success':false,
                    'error':"ivideeeee"
                })
            })
              
        })
      })
    //   console.log(ss.)
      .catch((err)=>{
        res.json({
			'success':false,
			'error':"ivideeeee"
      })

    })
})


module.exports = router;