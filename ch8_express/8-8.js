var http = require('http');
var express = require('express');

var app = express();

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어');
    req.number = 52;
    res.number = 273;
    next();
});

app.use(function (req, res, next) {
    console.log('세 번째 미들웨어');
    res.send('<h1>'+req.number+' : '+res.number+'</h1>');
    next();

});

app.use(function (req, res, next) {
    console.log('두 번째 미들웨어');
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.end('<h1> hi!!</h1>');
});

http.createServer(app).listen(52273, function () {
    console.log('Server is Running');
});
