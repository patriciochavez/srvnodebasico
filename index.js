var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
	}));

function imprimir(mensaje){
	console.log(mensaje);
	}

app.get(/^(.+)$/, function(req, res){ 
	console.log('GET: Archivo estatico solicitado : ' + req.params[0]);

	switch(req.params[0]) {
			    case '/get1.html':
				imprimir('get1');
				   break;
			    case '/get2.html':
				imprimir('get2');
				   break;
			    default:
				imprimir(req.params[0]);
				}	

	res.sendFile( __dirname + req.params[0]); 
 });
 
app.post(/^(.+)$/, function(req, res){ 
	console.log('POST: Archivo estatico solicitado : ' + req.params[0]);
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
 	console.log("Escuchando en " + port);
});
