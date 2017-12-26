
var express = require('express');
var path = require('path');
var routeElektronik = require('./app_server/routes/ElektronikRoute');
var app =  express();
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var db = require('./app_server/models/db');
var user = require('./app_server/models/kullanici');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./app_server/views'));

app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/Elektronik',routeElektronik);


var newUser = new user(
    {
        ad:'Mert',
        soyad:'Koprucu',
        username:'mrtkprc',
        password:'123456'

    }
);
newUser.save(function(err){
    if(err)
        console.log('Insert failed');
    else
        console.log('Success');
});

app.listen(8000,function(req,res){});
