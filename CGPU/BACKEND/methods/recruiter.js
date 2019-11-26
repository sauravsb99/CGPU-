const model = require('../models').recruiter
const Promise = require('bluebird')

var recruiterMethods = {}

recruiterMethods.getRecruiterByRecId = (RecId) => {
    return new Promise((resolve, reject) => {
/*         console.log("inside recruiter method");
 */        
        
        model.findOne({
            where: {
                rec_id: RecId
            }
        })
        .then((recruiter) => {
            console.log("resolvinte akath");
        resolve(recruiter)
        })
        .catch((err) => {
/*             console.log("recruiter error");
 */            console.log("resolvinte akath");
            reject(err)
        })
    })
}

recruiterMethods.getRecruiterByUsername = (user) => {
    return new Promise((resolve, reject) => {
/*         console.log("inside recruiter method");
 */        
        
        model.findOne({
            where: {
                username: user
            }
        })
        .then((recruiter) => {
            console.log("resolvinte akath");
        resolve(recruiter)
        })
        .catch((err) => {
/*             console.log("recruiter error");
 */            console.log("resolvinte akath");
            reject(err)
        })
    })
}


recruiterMethods.addRecruiter = (info) => {
    return new Promise((resolve, reject) => {
        model.create(info)
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            console.log("35");
            console.log(model);
            reject(err)
            
        })
    })
}

module.exports = recruiterMethods