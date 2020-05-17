const express = require('express');
var app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
var urlencodedparse = bodyParser();
var id =1;
//app.set('view engine', 'ejs');
//const http = require('http');
app.use('/assets', express.static('assets')); //render static files like css and js
app.use('/imag' , express.static('imag')); //render images
app.listen(3000); //set port
console.log('Listening at port 3000');
//Routes
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact.html', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});
app.get('/about.html', function(req, res){
    res.sendFile(__dirname + '/about.html');
});
app.get('/memberform.html', function(req, res){
    res.sendFile(__dirname + '/memberform.html');
});
app.get('/b.html', function(req, res){
    res.sendFile(__dirname + '/b.html');
});
app.get('/clubs.html', function(req, res){
    res.sendFile(__dirname + '/clubs.html');
});
app.post('/form', urlencodedparse, function(req, res){
    class User{
        var name,
        var phone;
    };
    u1 = new User();
    u1.name = req.body.username;
    u1.phone = req.body.phone;
    console.log(u1);
    //var writestream = fs.createWriteStream(__dirname + '/data/user'+ id +'.txt');
    //writestream = writestream + writestream.write();
    //id++;
    //(req.body.username).pipe(writestream);
    res.sendFile(__dirname + '/memberform.html');
});
