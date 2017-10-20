var express = require('express');
var http = require('http');

//var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var route = require("./route");
var app = express();



app.engine('html', cons.swig);
app.set('view engine', 'html');
//app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extend:true
}));
app.use(cookieParser());

// initialize application route config.
route.init(app);
http.createServer(app).listen(8888, function() {
   console.log("node server start!!!")
});


module.exports = app;
