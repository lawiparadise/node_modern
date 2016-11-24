var http = require('http');

http.createServer(function (req, res) {
    var cookie = req.headers.cookie;

    cookie = cookie.split(';').map(function (element) {
        var element = element.split('=');
        return {
            key: element[0],
            value: element[1]
        };
    });

    res.writeHead(200, {
        'Content-Type':'text/html',
        'Set-Cookie':['name = RintIanTta', 'region = Seoul']
    });
    res.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(52273, function () {
    console.log('Server is Running');
});