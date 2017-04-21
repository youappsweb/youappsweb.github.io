'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mobile-angular-ui',
  'myApp.view1',
  'myApp.view2',
  'myApp.login',
  'myApp.signup',
  'myApp.anims',
  'myApp.anim',
  'myApp.version'
]).
controller('MainCtrl', ['$scope','$rootScope',function($scope, $rootScope) {
  $scope.authenticated = true;
}]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
