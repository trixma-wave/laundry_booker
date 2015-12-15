// Invoke 'strict' JavaScript mode
'use strict';
//Test
// Create the 'home' controller
angular.module('home').controller('HomeController', ['$scope', '$stateParams', '$state', 'Home',
    function($scope, $stateParams, $state, Home) {

        $scope.book = function() {
            var booking = new Home({
                url: $scope.url,
                email: $scope.email
            });

            booking.$save(function(response) {
                $scope.output = JSON.parse(response);
            }, function(errorResponse) {
                $scope.output = errorResponse;
            });
        }
    }
]);
