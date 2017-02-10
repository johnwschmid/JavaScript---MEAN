var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	port = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var connection = mongoose.connect("mongodb://localhost/dob_db");

var DogSchema = new mongoose.Schema({
	name: String,
	weight: Number,
	color: String
});

var Dog = mongoose.model('Dog', DogSchema);

// Routes
app.get('/', function(req,res){
	Dog.find({}, function(err, results){
		res.render('index', { dogs: results });
	});
});

app.post('/', function(req, res){
	Dog.create(req.body, function(err, result){
		if (err) {console.log(err);}
		res.redirect('/');
	});
});

app.get('/new', function(req,res){
	res.render('new');
});

app.get('/dog/:id', function(req,res){
	Dog.find({ _id: req.params.id }, function(err, result){
		if(err){console.log(err);}
		console.log(result);
		res.render('show', { dogs: result[0] });
	});
});

app.post('/:id/delete', function(req,res){
	Dog.remove({ _id: req.params.id }, function(err, result){
		if(err){console.log(err);}
		res.redirect('/');
	});
});

app.post('/:id', function(req, res){
	Dog.update({ _id: req.params.id }, req.body, function(err, result){
		if(err) { console.log(err); }
		res.redirect('/');
	});
});

app.get('/:id/edit', function(req,res){
	Dog.find({ _id: req.params.id }, function(err, result){
		if(err){console.log(err);}
		console.log(result);
		res.render('edit', { dogs: result[0] });
	});
});

app.listen(port, function(){
	console.log("Running on ", port);
});