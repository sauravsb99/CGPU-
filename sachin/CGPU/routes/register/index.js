const express = require('express')
const router  = express.Router()
const peopleMethods = require('../../methods/people')
const studentMethods = require('../../methods/student')
const recruiterMethods = require('../../methods/recruiter')
const uid = require('uniqid')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')




router.post('/admin',(req,res,next) => {
    var person = {}
    person.people_id = uid();
    person.name = req.body.name
    person.role = 'admin'
    person.email = req.body.email
    person.phone = req.body.phone
    peopleMethods.addPerson(person)
    .then((person) => {
        res.json({
            "Success":true,
            "username":person.people_id
        })
        
    })

    .catch((err) => {
        if(err.message == "Validation error"){
            peopleMethods.removePerson(person)
            .then((result) => {
                res.json({
                    "Success":false,
                    "error":"username already in use"
                })
            })
            .catch((err) => {
                res.json({
                    "Success":false,
                    "error":err.message
                })
            })
        }
        else{
            res.json({
                "Success":false,
                "error":err.message
            })
        }
    })

})


router.post('/student',(req,res) => {

    var person = {}
    person.people_id = uid();
    person.name = req.body.name
    person.username = req.body.username
    const token = jwt.sign({'username': person.username, 'password' : req.body.password }, 'sachhhasdfghhkl')
    person.role = 'student'
    person.password = token
    person.email = req.body.email
    person.phone = req.body.phone
    peopleMethods.addPerson(person)
    .then((person) => {


        var info = {
            admission_no: req.body.admission_no,
            department: req.body.department,
            date_of_join: req.body.date,
            sex: req.body.sex,
            place1: req.body.place1,
            place2: req.body.place2,
            place3: req.body.place3
        }
    
        info.people_id = person.people_id
        studentMethods.addStudent(info)
    
        .then((info) => {
            res.json({
                "Success":true,
                "username":info.people_id
            })
            
        })
    
        .catch((err) => {
            if(err.message == "Validation error"){
                peopleMethods.removePerson(info)
                .then((result) => {
                    res.json({
                        "Success":false,
                        "error":"username already in use"
                    })
                })
                .catch((err) => {
                    res.json({
                        "Success":false,
                        "error":err.message
                    })
                })
            }
            else{
                res.json({
                    "Success":false,
                    "error":err.message
                })
            }
        })
        
    })

    .catch((err) => {
        if(err.message == "Validation error"){
            peopleMethods.removePerson(person)
            .then((result) => {
                res.json({
                    "Success":false,
                    "error":"username already in use"
                })
            })
            .catch((err) => {
                res.json({
                    "Success":false,
                    "error":err.message
                })
            })
        }
        else{
            res.json({
                "Success":false,
                "error":err.message
            })
        }
    })

})



router.post('/recruiter',(req,res) => {

    var person = {}
    person.people_id = uid();
    person.name = req.body.name
    person.role = 'recruiter'
    person.email = req.body.email
    person.phone = req.body.phone
    peopleMethods.addPerson(person)
    .then((person) => {


        var info = {}
 
            info.rec_id = req.body.rec_id
            info.people_id = person.people_id
            info.rec_name = req.body.rec_name
            info.rec_package = req.body.rec_package

        console.log(info);
        recruiterMethods.addRecruiter(info)
        
        // recruiterMethods.addRecruiter
    
        .then((info) => {
            res.json({
                "Success":true,
                "username":"298"
            })
            
        })
    
        .catch((err) => {
            if(err.message == "Validation error"){
                peopleMethods.removePerson(info)
                .then((result) => {
                    res.json({
                        "Success":false,
                        "error":"username already in use"
                    })
                })
                .catch((err) => {
                    res.json({
                        "Success":false,
                        "error":"err.message 315"
                    })
                })
            }
            else{
                res.json({
                    "Success":false,
                    "error":"err.message 322"
                })
            }
        })
        
    })

    .catch((err) => {
        if(err.message == "Validation error"){
            peopleMethods.removePerson(person)
            .then((result) => {
                res.json({
                    "Success":false,
                    "error":"username already in use"
                })
            })
            .catch((err) => {
                res.json({
                    "Success":false,
                    "error":"err.message 341"
                })
            })
        }
        else{
            res.json({
                "Success":false,
                "error":"err.message 348"
            })
        }
    })

    
    //     .then((info) => {
    //         res.json({
    //             "Success":true
    //         })
    //     })
    //     .catch((err) => {
    //         res.json({
    //             "Success":false,
    //             "error":err.message
    //         })
    //     })    
    // // })
    // .catch((err) => {
    //     res.json({
    //         "Success":false,
    //         "error":err.message
    //     })
    // })
})







module.exports = router