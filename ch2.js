/**
 * Created by win on 2016-10-15.
 */

console.log('hi world');

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type':'text/html'});
    response.end('<h1>hi world</h1>');
}).listen(52273, function () {
    console.log('Server running at http://localhost:52273');
});