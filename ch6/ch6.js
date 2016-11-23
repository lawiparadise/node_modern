//6-1
var http = require('http');
var server = http.createServer();
server.on('request', function () {
    console.log('request on');
});
server.on('connection', function () {
    console.log('connection on');
});
server.on('close', function () {
    console.log('close on');
});

server.listen(52273, function () {
    console.log('server running');
});
// setInterval(function () {
//     server.close();
// }, 3000);

