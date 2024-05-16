var express= require('express');
var app= express();

//define a middle ware function using app.use()
app.use(function(req,res,next){
	
	//log a msg with the current timestamp
	console.log("a new request received at" +Date.now());

//call the next function
	next();
});

//start the server
app.listen(3000,function(req,res){
	console.log("server is running at: http://localhost:3000/");
});