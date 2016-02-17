var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
	}));

app.get(/^(.+)$/, function(req, res){ 
	console.log('GET: Archivo estático solicitado : ' + req.params[0]);
	res.sendFile( __dirname + req.params[0]); 
 });
 
app.post(/^(.+)$/, function(req, res){ 
	console.log('POST: Archivo estático solicitado : ' + req.params[0]);
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
 	console.log("Escuchando en " + port);
});
