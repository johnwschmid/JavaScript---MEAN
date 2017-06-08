var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'), 
    app      = express();
    port     = process.env.PORT || 8000,
    root     = __dirname,

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );

app.listen( port, function() {
	console.log(`Running On ${ port }`);
});