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

  $scope.Artists = Artists;

  $scope.artist = {};

  $scope.addArtist = function () {
    $scope.Artists.push($scope.artist);
    $scope.artist = {};
    alert('artist added!')
  }

}]);

app.factory('Artists', function () {
  return [];
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