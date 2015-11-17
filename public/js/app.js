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
    templateUrl: '../public/views/layouts/navbar.html',
    controller: 'NavbarCtrl'
  };
});

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/home', {
          templateUrl: '../public/views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/add-artist', {
          templateUrl: '../public/views/add-artist.html',
          controller: 'AddArtistCtrl'
        })
        .otherwise({
          redirectTo: '/home'
        });
  }]);