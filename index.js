var express=require('express');
var bodyparser=require('body-parser');
var square=require("./Methods/process");
var app= express();
console.log("hello")

app.get(function(req,res){
var data = new square(10);
console.log(data.getHelloPhrase());
console.log(data.getarea());
console.log(data.getCustomerHelloPhrase());

})



