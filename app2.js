const { resolveSoa } = require('dns');
const express = require('express');
const path = require('path');
const app = express();

app.set("view engine","ejs");
app.set('views',path.join(__dirname,'./views'))

app.use(express.static(path.join(__dirname,'./public')));
app.get('/sign-in',function(req,res){
   res.render(
    "signin",
    {title: "Form",color: '#ff0000'},
    );
})

app.use(express.urlencoded({extended:false}));

app.post('/sign-in',function(req,res,next){
    // throw new Error("Error");
    if(req.body.username === 'admin' && req.body.password === '12345'){
        return res.send('Sign In Success')
    }
    return res.send("Page Not Found");
    
})

app.use(function(req,res){
    res.send("404 Not Found");
})

app.use(function(error,req,res,next){//for error handling (middle ware)
    console.log(error);
    res.send("This is Error page");
})

app.listen(8001,()=>{
    console.log("Server is listening at 8000");
})