var http = require('http');
http.createServer(function (req, res) {

    var date = new Date();
    date.setDate(date.getDate() + 7);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breakfast = toast;Expires = ' + date.toUTCString(),
            'dinner = chicken'
        ]
    });
    res.end('<h1>' + req.headers.cookie + '</h1>');
}).listen(52273, function () {
    console.log('server is running');
});

//6-15
http.createServer(function (req, res) {
    res.writeHead(302, {'Location': 'http://hanb.co.kr'});
    res.end();
}).listen(52274, function () {
    console.log('server is running');
});

//6-16
http.createServer(function (req, res) {
    res.writeHead(404);
    res.end();
}).listen(52275, function () {
    console.log('server is running');
});
