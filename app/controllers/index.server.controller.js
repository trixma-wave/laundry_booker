// Invoke 'strict' JavaScript mode
'use strict';

var request = require('request');

// Create a new 'render' controller method
exports.render = function(req, res) {
    // Use the 'response' object to render the 'index' view with a 'title
    res.render('index', {
        title: 'Laundry Booking'
    });
};

exports.createBooking = function(req, res) {
    console.log('index.server.controller.js, line 14;', 'req.body', req.body);

    request.get('http://aptusportal.sssb.se/', {
        'auth': {
            'user': 'username',
            'pass': 'password',
            'sendImmediately': false
        }
    });

    request(req.body.url, function(error, response, body) {
        if (error) return res.status(400).send(error);
        else {
            return res.status(200).send(response);
        }
    });
};
