var http = require('http');
var express = require('express');
var morgan = require('morgan');

app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<img src="/test.jpg" width="100%" />');
})

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});