const express = require('express')
const router  = express.Router()
var email = require('./mail')
router.get('/mail',(req,res)=>{
    res.send('mail')
})
router.use('/mail',email);

module.exports = router;