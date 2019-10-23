var express         = require('express');
var  app            = express();
var path            = require('path');
var router          = express.Router();
var data            = require('./data/jsonData');
var createDatabase  = require('./data/db');
var careateTable    = require('./data/createTable');
var insert          = require('./data/insert');
var bodyParser      = require('body-parser');
var select          = require('./data/select');


app.use(express.static(path.join(__dirname, 'www')));
app.use(express.static(path.join(__dirname, 'form')));
app.use(bodyParser());
app.get('/' , function (req , res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.get('/data' ,function (req , res) {
    res.json(data);
});
app.get('/form' ,function (req , res) {
    res.sendFile(path.join(__dirname + '/form/index.html'));
});
app.post('/form' ,function (req , res) {
    console.log(req.body.user);
    console.log(req.body.password);
    insert.insertModule(req.body.user , req.body.password);
    res.sendFile(path.join(__dirname + '/www/index.html'));
});
app.get('/show' , function (req , res) {
    var i ;
   select.select( function (err, results) {
       if (err == 'error') {
           console.log(err);
       } else {
           console.log(results);
           res.send(results.username);
       }
   });

});

app.listen(3000);
console.log("App is listning on port 3000");