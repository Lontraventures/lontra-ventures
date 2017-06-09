(function(){
  window.onscroll = function() {
    var scroll = document.body.scrollTop;
    $('#navbar')[0].className = scroll < 5 ? 'top' : '';
  }

  var app = angular.module('app', ['ngRoute', 'slick']);

  app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/technology', {
      templateUrl: 'views/technology.html'
    })
    .when('/technology', {
      templateUrl: 'views/technology.html'
    })
    .when('/life-sciences', {
      templateUrl: 'views/life-sciences.html'
    });
  });

  app.controller('AppCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

  app.controller('PortfolioCtrl', function($scope, $http) {
    var portfolio = this;

    // Loads the portfolio json file
    portfolio.load = function() {
      portfolio.loading = true;
      portfolio.error = false;
      portfolio.portfolio = 

      $http.get('portfolio.json')
        .then(function(resp) {
          portfolio.loading = false;
          portfolio.entries = resp.data;

        }, function(err) {
          console.warn('ERROR', err);
          portfolio.loading = false;
          portfolio.error = true;
        });
    };

    portfolio.load();
  });

})();