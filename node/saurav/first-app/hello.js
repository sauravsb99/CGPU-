
// const logger = require('./logger');
const os = require('os');



// console.log(logger.log('message'));
// logger.log('message');

var Freemem = os.freemem();
console.log(`Free memory : ${Freemem}`);