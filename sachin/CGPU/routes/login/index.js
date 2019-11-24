const express = require('express')
const router  = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
const peopleMethods = require('../../methods/people')
const studentMethods = require('../../methods/student')
const recruiterMethods = require('../../methods/recruiter')
var config = require('../../routes/config');
const uid = require('uniqid')
const fs = require('fs')
const bcrypt = require('bcrypt')

/* POST login. */
router.post('/',(req, res, next)=>  {
    var person = {}
//    person.people_id = uid();
    person.username = req.body.username
//    person.role = 'student'
//    person.email = req.body.email
//    person.phone = req.body.phone
    
    peopleMethods.getPeopleByUsername(person)
    .then((person) => {
        //req.person.loggedin = true;
          //  req.person.username = person.username;
        var passwordIsValid= bcrypt.compareSync(req.body.password,person.password)
        if(!(passwordIsValid)){
            console.log(p)
            console.log(person.password)
            return res.status(401).send({ auth: false, token: null });
            
            }
        else{

            const token = jwt.sign({'username': person.username, 'password' : req.body.password }, config.secret, {
                                    expiresIn: 60*60 // expires in 1 hours
                                });
            //res.status(200).send({ auth: true, token: token });
         /*   res.json({
            "Success":true,
            "password":person.password,
            "username":person.username
            
        })*/
            res.status(200).send({ auth: true, token: token });
        }
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



/*
    passport.authenticate('user_local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.json({
                error: info.message
            })
        }
        if(user.isVerified == false){
            res.json({
                "username":user.username,
                "verified":false
            })
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err)
           }

           // generate a signed son web token with the contents of user object and return it in the response
           
 
           const token = jwt.sign({'username': user.username, 'role' : 'student' }, 'sachhhasdfghhkl')         

           if(!fs.existsSync(__dirname+'/../../uploads/'+user.username)){
                fs.mkdir(__dirname+'/../../uploads/'+user.username, { recursive: true }, (err) => {
                    if (err) throw err;
                });
           }
           return res.json({
               'username': user.username,
               'usertype': 'student',
                'token': token,
                "verified":true
            })
        })
    })(req, res)
})*/

/*router.post('/verify',(req,res) => {
    var info = {}
    userMethods.getUserByUsername({
        username: req.body.username
    })
    .then((user) => {
        info.user_id = user.user_id
        verificationMethods.returnToken(info)
        .then((result) => {
            if(result.verification_token == req.body.verification_token){
                userMethods.updateUser({
                    user_id: info.user_id,
                    isVerified: true
                })
                .then((data) => {
                    res.json({
                        "Success":true
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
                    "error":"Incorrect verification token"
                })
            }
        })
        .catch((err) => {
            res.json({
                "Success":false,
                "error":err.message
            })
        })
    })
    .catch((err) => {
        res.json({
            "Success":false,
            "error":err.message
        })
    })
})
*/

/*
router.post('/studentinfo',(req,res) => {
    var info = {
        admission_no: req.body.admission_no,
        department: req.body.department,
        date_of_join: req.body.date,
        course: req.body.course
    }
    userMethods.findUserByUsername({
        username:req.body.username
    })
    .then((user) => {
        info.people_id = user.people_id
        studentMethods.addStudent(info)
        .then((result) => {
            res.json({
                "Success":true
            })
        })
        .catch((err) => {
            res.json({
                "Success":false,
                "error":err.message
            })
        })    
    })
    .catch((err) => {
        res.json({
            "Success":false,
            "error":err.message
        })
    })
})
*/



/*
router.post('/recruiter', function (req,res,next){
    passport.authenticate('cell_login', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.json({
                error: info.message
            })
        }

       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err)
           }

           // generate a signed son web token with the contents of user object and return it in the response
           
           cellMethods.getUserByUsername({
               username: user.user_name
           })
           .then((cell) => {
               peopleMethods.getPeopleByID({
                   people_id : cell.people_id
               })
               .then((ppl) => {
                const token = jwt.sign({'user_name': user.user_name, 'usertype': ppl.role }, 'poda_albine_and_akhile_and_bilale')         
                return res.json({
                    'username': user.user_name,
                    'usertype': ppl.role,
                     'token': token
                 })
               })
               .catch((err) => {
                   res.send(err)
               })
           })
           .catch((err) => {
               res.send(err);
           })
        })
    })(req, res)
})
*/

module.exports = router