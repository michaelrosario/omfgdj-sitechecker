const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); //url segments that we define
const cors = require('cors'); //cross domain solution
const app = express(); // backend
const server = require('http').createServer(app); // create server
const io = require('socket.io')(server); // sockets

const bodyParser = require('body-parser'); // goes through code and parses
// login
const morgan = require('morgan'); // middleware for logging  - part of passport
const session = require('express-session'); // keep session for the user
const MongoStore = require('connect-mongo')(session); // stores session on DB
const passport = require('./passport'); // handles login authentication

app.use(cors()); // calling cors

const PORT = process.env.PORT || 3001; // assign port process.env.PORT is heroku/server

app.use(express.json()); // uses everything is json
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") { // compress version and faster
  app.use(express.static("client/build")); 
}

// Define middleware here
app.use(morgan('dev')) // calling morgan
app.use(       
	bodyParser.urlencoded({
		extended: false
	})
)// converts/safe data to be pass through URL
app.use(bodyParser.json())

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sitechecker";
mongoose.connect(MONGODB_URI);
var dbConnection = mongoose.connection; // container for all connection information

// Sessions
app.use(
	session({
		secret: 'OMFGDJ', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
) // stores all the session in MongoDB

app.get('/.well-known/acme-challenge/:content', function(req, res) {
	res.send('Mle0GSeKT6HkOBecMZu7dw8It8yagT75Q9W1TArn1YI')
}) // SSL certificate

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Add routes, both API and view
app.use(routes);
// socket
io.on('connection', function (socket) {
  socket.on('fromReact', function (site) {
    socket.broadcast.emit('toReact', { data: site });
    console.log("site", site);
  });
});

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


