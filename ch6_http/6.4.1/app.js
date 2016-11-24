var http = require('http');
var fs = require('fs');
var url = require('url');

//6-20
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    if(pathname == '/'){
        console.log('client get in');
        fs.readFile('index.html', function (error, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if(pathname == '/OtherPage'){
        fs.readFile('OtherPage.html', function (error, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}).listen(52273, function () {
    console.log('Server is running');
});

//6-22
http.createServer(function (req, res) {
    if(req.method == 'GET'){
        console.log('get입니당');
        var query = url.parse(req.url, true).query;

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>'+ JSON.stringify(query) + '</h1>');
    }else if (req.method == 'POST'){
        console.log('post입니다.');
    }
}).listen(52274, function () {
    console.log('Server is running');
});