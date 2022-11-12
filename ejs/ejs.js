var ejs = require('ejs');
ejs.renderFile('main.ejs',{title: "My Self",name: "Kaung Myat Thu",age: 19,list:[1,2,3]},{root: __dirname},(err,str)=>{
    console.log(err,str);
})

