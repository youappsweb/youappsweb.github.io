'use strict';

angular.module('myApp.anims', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/anims', {
    templateUrl: 'anims/anims.html',
    controller: 'AnimsCtrl'
  });
}])

.controller('AnimsCtrl', ['$scope','$rootScope','$location',function($scope, $rootScope, $location) {
    $scope.sendAnim = function() {
        $location.path('/anim/'+$scope.animId);
    };

}]);