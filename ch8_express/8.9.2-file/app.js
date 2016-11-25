var http = require('http');
var fs = require('fs');
// var ejs = require('ejs');
// var jade = require('jade');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var getRawBody = require('raw-body');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var express = require('express');

var app = express();
var router = express.Router();
var multipartMiddleware = multipart();

app.use(morgan('dev'));
app.use(express.static(__dirname+'string'));
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multipart({uploadDir: __dirname + '/multipart'}));
app.use(router);

router.route('/')
    .get(function (req, res) {
        fs.readFile('HTMLPage.html', function (error, data) {
            res.send(data.toString());
        });
    })
    .post(function (req, res) {
        // getRawBody(req, {limit: '10mb'}, function (error, data) { //안되는듯?

            var comment = req.body.comment;
            var imageFile = req.files.image;

            console.log('comment : '+ comment);
            console.log('imageFile : '+imageFile);

            if(imageFile){
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;

                console.log('name : '+ name);
                console.log('path : '+path);
                console.log('type : '+type);

                if(type.indexOf('image') != -1){
                    var outputPath = __dirname+'/multipart/'+Date.now()+'_'+name;

                    fs.rename(path, outputPath, function (error) {
                        res.redirect('/');
                    });
                }else{
                    fs.unlink(path, function (error) {
                        res.send(400);
                    });
                }
            } else{
                res.send(404);
            }
        // }); //안되는듯?

        console.log(req.body);
        console.log(req.files);

        // res.redirect('/');
    });

http.createServer(app).listen(52273, function () {
    console.log('Server is running');
});