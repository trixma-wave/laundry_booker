// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
var express = require('./config/express'),
	config = require('./config/config');

// Create a new Express application instance
var app = express();

// Use the Express application instance to listen to the '3000' port
app.listen(config.port);

// Log the server status to the console
console.log('Server running at http://localhost:'+config.port+'/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
