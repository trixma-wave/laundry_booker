// Invoke 'strict' JavaScript mode
'use strict';

// Define the routes module' method
module.exports = function(app) {
    // Load the 'index' controller
    var index = require('../controllers/index.server.controller');

    // Mount the 'index' controller's 'render' method
    app.get('/', index.render);

    app.post('/api/laundry', index.createBooking); //C
    // app.get('/api/laundry', index.readBooking); //R
    // app.put('/api/laundry', index.updateBooking); //U
    // app.delete('/api/laundry', index.deleteBooking); //D
};
