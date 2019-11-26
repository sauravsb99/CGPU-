const express = require('express')
const router  = express.Router()
var nodemailer = require('nodemailer');

router.post('/sent',(res,req)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sauravsb99@gmail.com',
          pass: 'password adikkade'
        }
      });
      
      var mailOptions = {
        from: 'sauravsb99@gmail.com',
        to: 'sauravsb99@cet.ac.in',
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


module.exports = router;