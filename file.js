var fs= require('fs');

//var readMe= fs.readFileSync('readMe.txt','utf8'); //synchronous call
fs.readFile('readMe.txt','utf8', function(err,data){

   // console.log(data);
   fs.writeFile('writeMe.txt',data);
});


//console.log('hey hello');
