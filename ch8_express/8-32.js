var http = require('http');
var fs = require('fs');
// var ejs = require('ejs');
// var jade = require('jade');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var getRawBody = require('raw-body');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var express = require('express');

var app = express();
var router = express.Router();
var multipartMiddleware = multipart();

app.use(morgan('dev'));
app.use(express.static(__dirname+'string'));
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(multipart({uploadDir: __dirname + '/multipart'}));
app.use(router);

app.get('/user', function (req,res) {
    res.send(DummyDB.get());
    // res.send('<h1> hi</h1>');
});
app.get('/user/:id', function (req,res) {
    res.send(DummyDB.get(res.params.id));
    // res.send('<h1> hi</h1>');
});e
app.post('/user', function (req,res) {
    var name = req.body.name;
    var region = req.body.region;
    /*if(name && region){
        res.send(DummyDB.insert({
            name:name,
            region:region
        }));
    } else{
        throw new Error('error');
    }*/
});
app.put('/user/:id', function (req,res) {

});
app.del('/user/:id', function (req,res) {

});

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});
/*
var DummyDB = (function () {
    var DummyDB = {};
    var storage = [];
    var count = 1;

    DummyDB.get = function (id) {
        if(id){
            id = (typeof id == 'string') ? Number(id) : id;
            for(var i in storage) if (storage[i].id == id){
                return storage[i];
            }
        } else{
            return storage;
        }
    };

    DummyDB.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function (id) {
        id = (typeof id == 'string') ? Number(id) : id;

        for(var i in storage) if(storage[i].id == id){
            storage.splice(i, 1);
            return true;
        }
        return false;
    };

    return DummyDB;

});
*/