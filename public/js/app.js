var app = angular.module('artservApp', ['ngRoute']);

app.controller('HomeCtrl', ['$scope', 'Artists', function ($scope, Artists) {

  $scope.test = 'hello';

  $scope.Artists = Artists;

  $scope.expandArtistInfo = function (index) {
    if ($scope.showArtistInfo(index)) {
      $scope.artistIndex = null;
    } else {
      $scope.artistIndex = index;
    }
  }

  $scope.artistExpandedClass = function (index) {
    if ($scope.showArtistInfo(index)) {
      return "artist-border";
    } else {
      return null;
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

app.controller('FooterCtrl', ['$scope', function ($scope) {

}]);

app.controller('AddArtistCtrl', ['$scope', 'Artists', function ($scope, Artists) {

  $scope.event = 'GALLERY OPENING!';

  $scope.Artists = Artists;

  $scope.addArtist = function () {
    console.log($scope.Artists);
    $scope.Artists.push({
      firstName: 'Michael',
      lastName: 'Powell',
      website: 'www.studiopowell.com',
      emailAddress: 'michael.powell@gmail.com',
      city: 'St. Louis',
      country: 'USA',
      occupation: 'Artist'
    });
  }

}]);

app.factory('Artists', function () {
  return [{ firstName: 'Jane',
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
            occupation: 'Artist'
          }]
});

app.directive('appNavbar', function() {
  return {
    templateUrl: '/views/layouts/navbar.html',
    controller: 'NavbarCtrl'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: '/views/layouts/footer.html',
    controller: 'FooterCtrl'
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