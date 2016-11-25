var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({
    secret: 'secret key',
    key: 'ring',
    cookie:{
        maxAge:60*1000
    }
}));
app.use(bodyParser());

app.use(function (req, res) {
    var output = {};
    output.cookies = req.cookies;
    output.session = req.session;

    req.session.now = (new Date()).toUTCString();

    res.send(output);
});

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});