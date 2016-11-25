var http = require('http');
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var router = express.Router();
var app = express();

app.use(morgan('dev'));
app.use(cookieParser()); //얘가 router위에 있어야 쿠키 나옴!
app.use(router);

router.get('/getCookie', function (req, res) {
    // res.send('<h1>hi</h1>'); //헤더 어쩌고하면서 안됨..
    res.send(req.cookies);
    // console.log(req.cookies);
});

router.get('/setCookie',function (req, res) {
    res.cookie('string', 'cookie');
    res.cookie('json', {
        name:'cookie',
        property:'delicious'
    });
    // console.log('cookies : '+res.cookies);
    res.redirect('/getCookie');
});

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});