'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$rootScope','$location',function($scope, $rootScope, $location) {
    $scope.login = function() {
        $scope.error = "xxx";
    };
    $scope.gotoSignup = function() {
        $location.path('/signup');
    };

}]);