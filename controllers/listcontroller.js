
var bodyParser= require('body-parser');
var data= [{item:'wake up early'},{item:'Do yoga'},{item: 'Do coding'}];

var urlencodedParser= bodyParser.urlencoded({extended:false});
module.exports=function(app){

    app.get('/todo', function(req,res){
        res.render('todo',{todos:data});

    });

    app.post('/todo', urlencodedParser,function(req,res){
        console.log(req.body);
        data.push(req.body);
        res.json(data);
    });

    /* app.delete('/todo/:item', function(req,res){
        data=data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item
        });
          res.json(data);
    }); */

    function myTrim(x) {
        return x.replace(/^\s+|\s+$/gm,'');
        }
        
        app.delete('/todo/:item', function(req, res) {
        
            function isFilter(d) {
                //console.log(" data = "+ d.item)
               // console.log("params ="+ req.params.item)
                var data2=myTrim(req.params.item)
                //console.log(d.item+data2)
              
               // return (d.item !== '  code  ')  
              
            return (d.item !== data2)
            
            }
            data=data.filter(isFilter)
            console.log(data);
            res.json(data);
        });
        
}