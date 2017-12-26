
var express = require('express');
var path = require('path');
var routeElektronik = require('./app_server/routes/ElektronikRoute');


var app =  express();
app.use('/public',express.static(path.join(__dirname,'public')));

app.use('/Elektronik',routeElektronik);

app.use(function(req,res,next){
    console.log('Url: '+req.url);
    console.log('Date : '+Date.now());
    next();
});


app.listen(8000,function(req,res){
    
});
