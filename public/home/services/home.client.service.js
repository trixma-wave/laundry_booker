// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'home' service
angular.module('home').factory('Home', ['$resource', function($resource) {
	// Use the '$resource' service to return an home '$resource' object
    return $resource('api/laundry', {
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);