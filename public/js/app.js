var app = angular.module('artservApp', ['ngRoute']);

app.controller('HomeCtrl', ['$scope', function ($scope) {

  $scope.test = 'hello';

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
          redirectTo: '/home'
        });
  }]);