var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var connection = mongoose.connect("mongodb://localhost/dob_db");

// Schemas
var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String
});

var Quote = mongoose.model('Quote', QuoteSchema);

// Routes
app.get('/', function(req, res){
	res.render('index');
});

app.post('/quotes', function(req, res){
	Quote.create(req.body, function(err, result){
		if(err){console.log(err);}
		res.redirect('/quotes');
	});
});

app.get('/quotes', function(req, res){
	Quote.find({}, function(err, results){
		if(err){console.log(err);}
		res.render('quotes', {quotes: results});
	});
});

app.listen(3000, function(){
	console.log("Running on 3000");
});