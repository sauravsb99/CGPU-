const express = require('express')
const router  = express.Router()
const peopleMethods = require('../../methods/people')
const studentMethods = require('../../methods/student')
const recruiterMethods = require('../../methods/recruiter')
const uid = require('uniqid')
const fs = require('fs')

var path = require('path');
const bcrypt = require('bcrypt')
var passport = require('passport')
require('../../middlewares/passport')

router.get('/student',(req,res)=>{
    // app.get('/', function(request, response) {
        res.sendFile(path.join(__dirname + '../../../../FRONTEND/loginstudent.html'));
    // });
})
router.post('/student',(req,res)=>{
    
    passport.authenticate('student_local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.json({
                error: info.message

            })
        }
    // })

    console.log("test")
    req.login(user, {session: false}, (err) => {
        if (err) {
            res.send(err)
        }

        studentMethods.getStudentByUsername({
            username: user.username
        })
        .then((stud)=>{
            console.log(stud)
            //router.get('/student/logged',(req,res)=>{
            // app.get('/', function(request, response) {
            //res.sendFile(path.join(__dirname + '../../../../FRONTEND/student.html'));
            // });
            //})
        })
        .catch((err)=>{
            res.send(err)
        })

    })




})(req,res)
    
})

router.get('/recruiter',(req,res)=>{
    // app.get('/', function(request, response) {
        res.sendFile(path.join(__dirname + '../../../../FRONTEND/loginrec.html'));
    // });
})

router.post('/recruiter',(req,res)=>{
    
    passport.authenticate('recruiter_local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.json({
                error: info.message
            })
        }
    // })
    console.log("test")
    req.login(user, {session: false}, (err) => {
        if (err) {
            res.send(err)
        }

        recruiterMethods.getRecruiterByUsername({
            username: user.username
        })
        .then((stud)=>{
            console.log(stud)
        })
        .catch((err)=>{
            res.send(err)
        })

    })




})(req,res)
    
})

router.get('/admin',(req,res)=>{
    // app.get('/', function(request, response) {
        res.sendFile(path.join(__dirname + '../../../../FRONTEND/loginad.html'));
    // });
})

router.post('/admin',(req,res)=>{
    
    passport.authenticate('admin_local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.json({
                error: info.message
            })
        }
    // })
    console.log("test")
    req.login(user, {session: false}, (err) => {
        if (err) {
            res.send(err)
        }

        peopleMethods.getPeopleByUsername({
            username: user.username
        })
        .then((stud)=>{
            console.log(stud)
        })
        .catch((err)=>{
            res.send(err)
        })

    })

})(req,res)
    
})
module.exports = router;