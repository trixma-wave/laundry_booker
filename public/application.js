// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'laundrybooking';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ui.router', 'home', 'ui.bootstrap']);

// Configure the hashbang URLs using the $locationProvider services 
mainApplicationModule.config(['$locationProvider', '$stateProvider',
    function($locationProvider, $stateProvider) {
        $locationProvider.hashPrefix('!');

        $stateProvider.state('home', {
            url: '',
            templateUrl: 'home/views/input.client.view.html'
        });
    }
]);


// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
    console.log("application bootstrapped");
});
