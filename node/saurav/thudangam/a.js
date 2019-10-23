var express=require('express');
var app=express();


app.route('/Saurav').get(function(req,res){
	res.send('Hi am Saurav');
})
app.route('/Sachin').get(function(req,res){
	res.send('Hi am gay');
})

app.get('/',function(req,res)
{
res.send('Hello World!');
});
var server=app.listen(3000,function() {});