//Bring in dependencies================================
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var hbs = require('express-handlebars');
var path = require('path');

// configuration =======================================
var app = express(); //Express
//require('./app/dataConfig/db'); // connect to db

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', __dirname + '/views/');
app.set('view engine', 'hbs');

app.use(morgan('dev'));

app.use(bodyParser.json());//body-parser
app.use(bodyParser.urlencoded({extended: true}));

// routes ==============================================
app.use(express.static(__dirname + '/public')); //set route for static files
var routes = require('./app/api/routes');
app.use('/', routes); // configure our routes

// set port and start app on 8080======================
var port = process.env.PORT || 8080;
app.listen(port);

// shoutout to the user
console.log('Listening to port: ' + port);

// expose app
exports = module.exports = app;
