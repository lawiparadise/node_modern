var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var client = mysql.createConnection({
    user : 'root',
    password : '1234',
    database : 'Company'
});

app.use(router);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function (req, res) {
    fs.readFile('list.html', 'utf-8', function (error, data) {
        client.query('SELECT * FROM products', function (error, results) {
            res.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function (req, res) {
    client.query('DELETE FROM products WHERE id=?', [req.params.id], function () {
        res.redirect('/');
    })
});

app.get('/insert', function (req, res) {
    fs.readFile('insert.html', 'utf-8', function (error, data) {
        res.send(data);
    });
});

app.post('/insert', function (req, res) {
    var body = req.body;

    client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [body.name, body.modelnumber, body.series], function () {
        res.redirect('/');
    });
});

app.get('/edit/:id', function (req, res) {
    fs.readFile('edit.html', 'utf-8', function (error, data) {
        client.query('SELECT * FROM products WHERE id= ?', [req.params.id], function (error, result) {
            res.send(ejs.render(data, {data:result[0]}));
        });
    });
});

app.post('/edit/:id', function (req, res) {
    var body = req.body;

    client.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?', [body.name, body.modelnumber, body.series, req.params.id], function () {
        res.redirect('/');
    });
});

http.createServer(app).listen(52273, function () {
    console.log('server running at 52273');
});