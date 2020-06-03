(function(){
  window.onscroll = function() {
    var scroll = $(window).scrollTop() + $(document.body).scrollTop();
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
    .when('/portfolio', {
      templateUrl: 'views/portfolio.html'
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
      quote: 'Lontra is one of our biggest advocates. They took time to understand our business deeply and have helped us navigate complex issues and relationships with customers, partners, and competitors.',
      author: 'Sam Anderegg',
      position: 'CEO/Founder, DocStation'
    }, {
      quote: 'Andrea is one of the best people I have known, who is always willing to help and knows everyone.',
      author: 'Subbu Rama',
      position: 'Co-founder of Bitfusion (exit to VMware)'
    }, {
      quote: 'Andrea is hyper networked in Austin. If you need better connections, more intros, or want to expand your team, Andrea can help.  She rocks.',
      author: 'James Davison',
      position: 'Co-founder of Olono (exit to InsightSquared)'
    }, {
      quote: 'I\’ve known and worked with Andrea since 2013 and am continually impressed with her.  She’s a very hands on investor who is incredibly smart, very optimistic and balanced with the right amount of transparent pragmatism.',
      author: 'Amos Schwartzfarb',
      position: 'Managing Director, Techstars',
    }, {
      quote: 'Lontra Ventures has been amazing to collaborate with over the last few years. Andrea and Walter are two of Geekdom Fund\'s most trusted advisers in Austin.',
      author: 'Mike Troy',
      position: 'Partner, Geekdom Fund',
    }];
  });

  app.controller('PortfolioCtrl', function($scope, $http) {
    var portfolio = this;

    // Loads the portfolio json file
    portfolio.load = function() {
      portfolio.loading = true;
      portfolio.error = false;
      portfolio.portfolio =

      $http.get('portfolio.json?v1')
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
