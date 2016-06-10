var express = require("express");
var fs = require('fs');
var path = require('path');
var router = express.Router();

var app = express();

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });

app.get('/test', function(req, res) {
	console.log('/test was accessed');
	response = 'Этот текст был загружен с сервера';

    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write(response);
    res.end();
});


app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');