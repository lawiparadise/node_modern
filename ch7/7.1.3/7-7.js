var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (req, res) {
    fs.readFile('ejsPage.ejs', 'utf8', function (error, data) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(ejs.render(data, {
            name: 'RintIanta',
            description: 'Hello ejs'
        }));
    });
}).listen(52273, function () {
    console.log('Server is running');
});