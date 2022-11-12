var express = require('express');
var app = express();
var path = require('path');

var rout1 = '/rout1';
var rout2 = '/rout2';

app.use(express.static(path.join(__dirname,'public')));

//middle ware
// app.use(function(req,res,next){
//     // res.send("I am response in rout1")
//     // console.log("This is first function");
//     next()//this is same with "continue" in JS
// })

// app.use(rout1,function(req,res){
//     res.send("I am response in rout2")
// })

// app.get('/signup',function(req,res){
//     res.sendFile('index.html');
// })

app.use(function (req,res){
    res.send("Page Not Found");
})

var port = 3001;
app.listen(port,(err)=>{
    console.log("Seriver is running on port: ",port);
})
