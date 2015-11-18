var app = angular.module('artservApp', ['ngRoute']);

app.controller('HomeCtrl', ['$scope', function ($scope) {

  $scope.test = 'hello';

  $scope.artists = [{ firstName: 'Jane',
                    lastName: 'Philipps',
                    website: 'www.janephilipps.com',
                    emailAddress: 'jane.philipps@gmail.com',
                    city: 'San Francisco',
                    country: 'USA',
                    occupation: 'Artist'},
                    { firstName: 'Erin',
                    lastName: 'Mitchell',
                    website: 'www.erin-mitchell.com/',
                    emailAddress: 'erinleighmitchell1@gmail.com',
                    city: 'San Francisco',
                    country: 'USA',
                    occupation: 'Artist'},
                    { firstName: 'Jen',
                    lastName: 'Hewett',
                    website: 'http://jenhewett.com/',
                    emailAddress: 'erinleighmitchell1@gmail.com',
                    city: 'San Francisco',
                    country: 'USA',
                    occupation: 'Artist'}
                    ];

  $scope.expandArtistInfo = function (index) {
    if ($scope.showArtistInfo(index)) {
      $scope.artistIndex = null;
    } else {
      $scope.artistIndex = index;
    }
  }

  $scope.showArtistInfo = function (index) {
    return $scope.artistIndex === index;
  }

}]);

app.controller('NavbarCtrl', ['$scope', function ($scope) {

  $scope.nav = 'NAV';

  $scope.search = function () {
    console.log('SEARCHING');
  }

}]);

app.controller('AddArtistCtrl', ['$scope', function ($scope) {

  $scope.event = 'GALLERY OPENING!';

}]);

app.directive('appNavbar', function() {
  return {
    templateUrl: '/views/layouts/navbar.html',
    controller: 'NavbarCtrl'
  };
});

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: '/views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/add-artist', {
          templateUrl: '/views/add-artist.html',
          controller: 'AddArtistCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  }]);