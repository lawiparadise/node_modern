var http = require('http');
var express = require('express');
var morgan = require('morgan');
var app = express();
var router = express.Router();

app.use(morgan('dev'));
app.use(express.static(__dirname+'8.6/public'))
app.use(router);

router.get('/', function (req, res) {
    res.send('<h1>home</h1>');
})
router.get('/a', function (req, res) {
    res.send('<a href="/b">Go to B</a>');
});

router.get('/b', function (req, res) {
    res.send('<a href="/a">Go to A</a>');
});

router.get('/page/:id', function (req, res) {
    // var name = req.param('id'); //됨
    var name = req.params.id; //됨
    res.send('<h1>'+name+'</h1>');
});

router.all('*', function (req, res) {
    res.send(404, '<h1>ERROR - MY page not found</h1>');
});

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});