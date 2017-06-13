(function(){
  window.onscroll = function() {
    var scroll = document.body.scrollTop;
    var hasClass = $('#navbar').hasClass('top');
    if(scroll < 5 && !hasClass) {
      $('#navbar').addClass('top');
    } else if (scroll >= 5 && hasClass) {
      $('#navbar').removeClass('top');
    } 
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

    $scope.quotes = [{
      quote: 'Warm, positive and outgoing, Andrea still can seriously stir the pot and push past all obstacles.  You want her on your side!',
      author: 'Rob Hirschfeld',
      position: 'CEO/Founder, RackN'
    }, {
      quote: 'Most investors talk about \'adding value, Lontra does',
      author: 'Paul Murphy',
      position: 'CEO/Founder, Clarify'
    }, {
      quote: 'Andrea is one of the best people I have known, who is always willing to help and knows everyone.',
      author: 'Subbu Rama',
      position: 'CEO/Co-Founder, Bitfusion'
    }, {
      quote: 'Andrea is hyper networked in Austin. If you need better connections, more intros, or want to expand your team, Andrea can help.  She rocks.',
      author: 'James Davison',
      position: 'Co-Founder, Nexd'
    }, {
      quote: 'I\’ve known and worked with Andrea since 2013 and am continually impressed with her.  She’s a very hands on investor who is incredibly smart, very optimistic and balanced with the right amount of transparent pragmatism.',
      author: 'Amos Schwartzfarb',
      position: 'Managing Director, Techstars',
    }];
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