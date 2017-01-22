//Import Libraries.
var express = require('express');

//Server Instance
// var server = express();

var app = require('./app');

//Configuring server 
var port = process.env.PORT|3002;
var server = app.listen(port,function(){
    console.log("|----------------------Server starting---------------------------|");
    console.log("                       Listening on :"+" "+server.address().port);
    console.log("|----------------------Server has been started---------------------------|");
})