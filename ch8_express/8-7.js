var http = require('http');
var express = require('express');
var app = express();

app.use(function (req, res) {
    var name = req.query.name;
    var region = req.query.region;

    res.send('<h1>'+name+'-'+region+'</h1>');
});

http.createServer(app).listen(52273, function () {
    console.log('Server is Running');
});