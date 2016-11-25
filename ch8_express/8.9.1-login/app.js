var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());
app.use(router);
// app.use(app.router); //이거 안됨

//됨
/*app.get('/', function (req, res) {
    if (req.cookies.auth) {
        res.send('<h1>Login Success</h1>');
    } else {
        res.redirect('/login');
    }
    // res.end('<h1>hi</h1>');
});
app.route('/login')

    .get(function (req, res) {
        fs.readFile('login.html', function (error, data) {
            res.send(data.toString());
        });
    })

    .post(function (req, res) {
        var login = req.body.login;
        var password = req.body.password;

        console.log(login, password);
        console.log(req.body);

        if (login == '1' && password == '1') {
            res.cookie('auth', true);
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    });*/

//됨
app.get('/', function (req, res) {
    if(req.cookies.auth){
        res.send('<h1>Login Success</h1>');
    } else{
        res.redirect('/login');
    }
    // res.end('<h1>hi</h1>');
});

app.get('/login', function (req, res) {
    fs.readFile('login.html', function (error, data) {
        res.send(data.toString());
    });
});

app.post('/login', function (req, res) {
    var login = req.body.login;
    var password = req.body.password;

    console.log(login, password);
    console.log(req.body);

    if (login == '1' && password == '1') {
        res.cookie('auth', true);
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

//됨
/*router.get('/', function (req, res) {
    if(req.cookies.auth){
        res.send('<h1>Login Success</h1>');
    } else{
        res.redirect('/login');
    }
    // res.end('<h1>hi</h1>');
});

router.get('/login', function (req, res) {
    fs.readFile('login.html', function (error, data) {
        res.send(data.toString());
    });
});

router.post('/login', function (req, res) {
    var login = req.body.login;
    var password = req.body.password;

    console.log(login, password);
    console.log(req.body);

    if(login == 'a' && password == 'a'){
        res.cookie('auth', true);
        res.redirect('/');
    } else{
        res.redirect('/login');
    }
});*/

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});