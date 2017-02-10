var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var connection = mongoose.connect("mongodb://localhost/dob_db");

app.listen(3000, function(){
	console.log("Running on 3000");
});

// Schemas
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	name: { type: String, required: true},
	message: { type: String, required: true},
	_comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var CommentSchema = new mongoose.Schema({
	name: { type: String, required: true},
	comment: { type: String, required: true},
	_post: { type: Schema.Types.ObjectId, ref: 'Post'}
});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// Routes
app.get('/', function(req, res){
	Post.find({}, false, true).populate('_comments').exec(function(err, result){
		if(err){console.log(err)}
		res.render('index', {embedPost: result});
	})
})

app.post('/', function(req, res){
	Post.create(req.body, function(err, result){
		if(err){console.log(err)}
		res.redirect('/');
		console.log(req.body);
	})
})

// app.post('/comment/:id', function(req, res){
// 	Comment.create(req.body, function(err, result){
// 		if(err){console.log(err)}
// 		console.log(req.body);
// 		Post.update({_id: Post._id}, {$push: {"_comments": Comment}}, function(err){
// 			if(err){console.log(err)}
// 			res.redirect('/');
// 		});
// 	});
// })

app.post("/comment/:id", function(req, res){
	var message_id = req.params.id;
	Post.findOne({_id: message_id}, function(err, message){
		var newComment = new Comment({name: req.body.name, comment: req.body.comment});
		newComment._post = message._id;
		Post.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){
			if(err){console.log(err)}
			newComment.save(function(err){
				if(err){
					console.log(err);
					res.render('index.ejs', {errors: newComment.errors});
				} else {
					console.log("comment added");
					res.redirect('/');
				}
			});
		});
	});
});








