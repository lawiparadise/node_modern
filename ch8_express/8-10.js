var http = require('http');
var express = require('express');
var morgan = require('morgan');
var app = express();

// app.use(express.logger());
// app.use(morgan('dev'));
// app.use(morgan());
// app.use(morgan(':method + :date'));
app.use(morgan('short'));
app.use(function (req, res) {
    res.send('<h1>express Bacsic</h1>');
});

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});