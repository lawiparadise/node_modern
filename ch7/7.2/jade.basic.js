var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (req, res) {
    fs.readFile('7-18.jade', 'utf8', function (error, data) {
        var fn = jade.compile(data);

        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(fn({
            name: 'RintIantag',
            description: 'Hellow jade'
        }));
    });
}).listen(52273, function () {
    console.log('Server is Running');
});