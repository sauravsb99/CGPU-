var express=require('express');
var app=express();
app.get('/',(req,res)=>
	{res.send("Hi baby")});
app.listen(8888,function(){});
