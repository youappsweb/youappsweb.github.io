'use strict';

angular.module('myApp.anim', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/anim/:id', {
    templateUrl: 'anim/anim.html',
    controller: 'AnimCtrl'
  });
}])

.controller('AnimCtrl', ['$scope','$rootScope','$location','$routeParams',function($scope, $rootScope, $location, $routeParams) {
    $scope.id = $routeParams.id;

}]);