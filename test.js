var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var express = require('express');
var mongo = require('mongojs');

var app = express();
var router = express.Router();

//mongojs
var db = mongo('node', ['products']);
db.products.find(function (error, data) {
    console.log(data);
});

app.use(morgan('dev'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(multipart({uploadDir: __dirname + '/multipart'}));
app.use(router);

app.get('/', function (req,res) {
    // res.send(DummyDB.get());
    res.send('<h1> hi</h1>');
});

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});

