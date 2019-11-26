const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
const studentMethods = require('../methods/student')
const recruiterMethods = require('../methods/recruiter')
const peopleMethods = require('../methods/people')
const bcrypt = require('bcrypt')

passport.use('student_local',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    (username,password,cb) => {
        return studentMethods.getStudentByUsername(username)
            .then((user) => {
                if(!user){
                    return cb(null, false, {
                        message: 'no such username'
                    })
                }
                else{
                    console.log(password);
                    console.log(user.password);
                    
                    bcrypt.compare(password, user.password)
                    .then((res) => {
                        if(!res){
                            return cb(null, false, {
                                message: 'incorrect password'
                            })
                        }
                        else{
                            return cb(null, user, {message: 'Logged In Successfully'});
                        }
                    })
                    .catch((err) => {
                        console.log("Inside passport local strategy\nError caught in bcrypt \n"+err.stack);
                        
                    })
                }
            })
            .catch((err) => {
                console.log("Inside passport local strategy\n"+err);
                
            })
    }
))


passport.use('recruiter_local',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    (username,password,cb) => {
        return recruiterMethods.getRecruiterByUsername(username)
            .then((user) => {
                if(!user){
                    return cb(null, false, {
                        message: 'no such username'
                    })
                }
                else{
                    console.log(password);
                    console.log(user.password);
                    
                    bcrypt.compare(password, user.password)
                    .then((res) => {
                        if(!res){
                            return cb(null, false, {
                                message: 'incorrect password'
                            })
                        }
                        else{
                            return cb(null, user, {message: 'Logged In Successfully'});
                        }
                    })
                    .catch((err) => {
                        console.log("Inside passport local strategy\nError caught in bcrypt \n"+err.stack);
                        
                    })
                }
            })
            .catch((err) => {
                console.log("Inside passport local strategy\n"+err);
                
            })
    }
))



passport.use('admin_local',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    (username,password,cb) => {
        return peopleMethods.getPeopleByUsername(username)
            .then((user) => {
                if(!user){
                    return cb(null, false, {
                        message: 'no such username'
                    })
                }
                else{
                    console.log(password);
                    console.log(user.password);
                    
                    bcrypt.compare(password, user.password)
                    .then((res) => {
                        if(!res){
                            return cb(null, false, {
                                message: 'incorrect password'
                            })
                        }
                        else{
                            return cb(null, user, {message: 'Logged In Successfully'});
                        }
                    })
                    .catch((err) => {
                        console.log("Inside passport local strategy\nError caught in bcrypt \n"+err.stack);
                        
                    })
                }
            })
            .catch((err) => {
                console.log("Inside passport local strategy\n"+err);
                
            })
    }
))