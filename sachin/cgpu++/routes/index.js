var express = require('express');
var router = express.Router();
var app=express();
var server='localhost:3000'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CGPU++' });
});



app.get('/', (req, res) => {
  res.send('Hello from the main application');
});

const reportingApp = express();
app.use('/reporting', reportingApp);

const jsreport = require('jsreport')({
  extensions: {
      express: { app: reportingApp, server: server },
  },
  appPath: "/reporting"
});

jsreport.init().then(() => {
  console.log('jsreport server started')
}).catch((e) => {
  console.error(e);
});

module.exports = router;
