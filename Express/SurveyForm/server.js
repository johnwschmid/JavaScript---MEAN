//Loads the express,path and bodyParser modules.
var path = require("path");
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser.urlencoded());
//This tells express where the VIEW files are.
app.set('views', __dirname + '/views');
//This sets the view engine to ejs.
app.set('view engine', 'ejs');
//This tells express where the STATIC files are.
app.use(express.static(__dirname + "/static"));

app.listen(8000, function(){
	console.log("Listening on port 8000.");
});

//Routes
app.get('/', function(req, res){
	res.render('index');
});

app.post('/result', function(req, res){
	survey_info = {
		name: req.body.name,
		dojo: req.body.dojo,
		lang: req.body.lang,
		comm: req.body.comm
	}
	res.render('result', {data: survey_info})
});