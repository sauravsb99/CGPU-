const express = require('express')
const router  = express.Router()
const peopleMethods = require('../../methods/people')
const studentMethods = require('../../methods/student')
const recruiterMethods = require('../../methods/recruiter')
const uid = require('uniqid')
const fs = require('fs')
const bcrypt = require('bcrypt')




router.post('/admin',(req,res,next) => {
    var person = {}
    person.people_id = uid();
    person.username = req.body.username
    person.password = req.body.password
    person.name = req.body.name
    person.role = 'admin'
    person.email = req.body.email
    person.phone = req.body.phone
    // var a = req.body.password
    // person.password=bcrypt.hash(req.body.password,20)
    // var a = bcrypt.hash(req.body.password,10)
    bcrypt.hash(person.password,10)
                .then((hashPass) => {
                    // console.log("ividddddeeee")
                    person.password = hashPass
                    console.log(person.password)
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
                .catch((err)=>{
                    recruiterMethods.json({
                        "error":"andi"
                    })
                })
    // person.password=req.body.password
    // console.log(a)
})
   






router.post('/student',(req,res) => {

    var person = {}
    person.people_id = uid();
    person.name = req.body.name
    person.role = 'student'
    person.email = req.body.email
    person.phone = req.body.phone
    person.username = req.body.username
    person.password = req.body.password
    bcrypt.hash(person.password,10)
        .then((hashPass) => {
            person.password = hashPass
            console.log(person.password)
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
                info.username = person.username
                info.password = person.password
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
// })

//                         res.json({
//                             "Success":true,
//                             "username":person.people_id
//                         })
                        
//                     })
                
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
                .catch((err)=>{
                    recruiterMethods.json({
                        "error":"andi"
                    })
                })
    // person.password=req.body.password
    // console.log(a)
})
   


// router.post('/recruiter',(req,res) => {

//     var person = {}
//     person.people_id = uid();
//     person.name = req.body.name
//     person.role = 'recruiter'
//     person.email = req.body.email
//     person.phone = req.body.phone
//     peopleMethods.addPerson(person)
//     .then((person) => {

//         var reca = {
//             rec_id: req.body.rec_id,
//             rec_name: req.body.rec_name,
//             rec_package: req.body.rec_package,
//         }
    
//         reca.people_id = person.people_id
//         recruiterMethods.addRecruiter(reca)
    
//         .then((reca) => {
//             res.json({
//                 "Success":true,
//                 "username":"ivide"
//             })
            
//         })
    
//         .catch((err) => {
//             if(err.message == "Validation error"){
//                 peopleMethods.removePerson(info)
//                 .then((result) => {
//                     res.json({
//                         "Success":false,
//                         "error":"username already in use"
//                     })
//                 })
//                 .catch((err) => {
//                     res.json({
//                         "Success":false,
//                         "error":err.message
//                     })
//                 })
//             }
//             else{
//                 res.json({
//                     "Success":false,
//                     "error":err.message
//                 })
//             }
//         })

        
//     })

//     .catch((err) => {
//         if(err.message == "Validation error"){
//             peopleMethods.removePerson(person)
//             .then((result) => {
//                 res.json({
//                     "Success":false,
//                     "error":"username already in use"
//                 })
//             })
//             .catch((err) => {
//                 res.json({
//                     "Success":false,
//                     "error":err.message
//                 })
//             })
//         }
//         else{
//             res.json({
//                 "Success":false,
//                 "error":err.message
//             })
//         }
//     })

    
//     //     .then((info) => {
//     //         res.json({
//     //             "Success":true
//     //         })
//     //     })
//     //     .catch((err) => {
//     //         res.json({
//     //             "Success":false,
//     //             "error":err.message
//     //         })
//     //     })    
//     // // })
//     // .catch((err) => {
//     //     res.json({
//     //         "Success":false,
//     //         "error":err.message
//     //     })
//     // })
// })




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
            // admission_no: req.body.admission_no,
            // department: req.body.department,
            // date_of_join: req.body.date,
            // sex: req.body.sex,
            // place1: req.body.place1,
            // place2: req.body.place2,
            // place3: req.body.place3
            info.rec_id = req.body.rec_id
            info.people_id = person.people_id
            info.rec_name = req.body.rec_name
            info.rec_package = req.body.rec_package
        
        // console.log("289");
        // info.people_id = person.people_id
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