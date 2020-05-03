/*  setTimeout(function(){
    console.log('3 second passed');
}, 3000) 
 */

 /* var time=0;
 var timer= setInterval(function(){
     time +=2;
     console.log(time + ' seconds have passed');
     if(time>5){
         clearInterval(timer);
     }
 
 }, 2000); */


 /* console.log(__dirname);
 console.log(__filename); */



 /* function callFunction(fun){
     fun();
 }
 //function expression
 var sayBye= function(){
     console.log('bye');
 };
 callFunction(sayBye); */


 //other program

 /* var stuff = require('./stuff');

 console.log(stuff.counter(['shaun','crystal','ryu']));

console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5)); */

var express =require('express');
var app=express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');

});
app.get('/contact', function(req,res){
    res.render('contact');

});

app.get('/profile/:name', function(req,res){
    var data = {age:22, job: 'Software Engineer', hobbies:['Reading', 'writing', 'listening song']};
    res.render('profile', {person:req.params.name, data:data});
});

app.listen(3000);