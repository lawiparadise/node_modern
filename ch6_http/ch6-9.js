var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    fs.readFile('test.jpg', function (error, data) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);
    });
}).listen(52273, function () {
    console.log('server is running at 52273');
});

http.createServer(function (req, res) {
    fs.readFile('test.mp3', function (error, data) {
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(data);
    });
}).listen(52274, function () {
    console.log('server is running at 52274');
});