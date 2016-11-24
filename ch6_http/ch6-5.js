require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1> hi web server</h1>');
}).listen(52274, function () {
    console.log('server is running');
});