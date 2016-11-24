require('http').createServer(function (req, res) {
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h1>'+"his"+'</h1>');
    } else{
        error.error.error();
    }
}).listen(52273, function () {
    console.log('Server is running');
});