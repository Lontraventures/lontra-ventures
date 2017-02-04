(function(){
  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "views/home.html"
    })
    .when("/technology", {
      templateUrl: "views/technology.html"
    })
    .when("/life-sciences", {
      templateUrl: "views/life-sciences.html"
    });
  });

  app.controller('AppCtrl', function($scope, $location){
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

})();