var http = require('http');
var express = require('express');

var app = express();

app.use(function (req, res) {

    var agent = req.header('User-Agent');
    console.log(req.headers);
    console.log(agent);

    if(agent.toLowerCase().match(/chrome/)){
        res.send('<h1> hellow chrome!!</h1>');
    } else{
        res.status(404).send('<h1>ERROR!!</h1>');
    }
    var output = [];
    for(var i=0 ; i<3 ; i++){
        output.push({
            count:i,
            name: 'name - '+i
        })
    }
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.end('<h1>Hi world</h1>');
    // res.send(output);

});

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});