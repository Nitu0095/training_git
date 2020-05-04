var express= require('express');
var listController = require('./controllers/listcontroller');
var app= express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use( express.static('./public'));

//fire controllers
listController(app);


//listen to port
app.listen(3000);
console.log('You are listening to port 3000');

