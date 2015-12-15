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

    var login = {
        url: 'http://aptusportal.sssb.se/',
        auth: {
            'user': '2118-0405-013',
            'pass': '2118-0405-013',
            'sendImmediately': false
        }
    };
    var booking = {
        url: 'http://aptusportal.sssb.se/index.aspx'
    };

    request.defaults({jar: true}).get(login, function(error, response, body) {
        if (error) return res.status(400).send(error);
        else {
            console.log('index.server.controller.js, line 31;','second request');
            request.defaults({jar: true}).get(booking, function(error, response, body) {
                console.log('index.server.controller.js, line 33;','body',body);
                return res.status(200).send(body);
            });
        }
    });
};

// .cookie('__utma=149548724.1107997838.1450217591.1450217591.1450217591.1')
//             .cookie('__utmc=149548724')
//             .cookie('__utmz=149548724.1450217591.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)')
//             .cookie('ASP.NET_SessionId=55ppwjfmnnkn1h55xhdosb55')
//             .cookie('.ASPXAUTH=4B6B5DCB77850B4BB2C193F5730E5F14D34AAF4E736D86527E1CFF2EE8A0798E0D6D7069610084FB46F85E3D565CF81F5951FD4DB9967D643F7362B09A28DEDC58817F503AAB25E5DE0F4B070D344F1F355B5EF16A6C75FFDBEA3680A3E1A615C5D6030756CA839810EC6A5B86A2BF64EAAE9A9482548EEB0474596408BA03E903ED60C7')