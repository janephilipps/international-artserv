angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/add-artist', {
      templateUrl: 'views/add-artist.html',
      controller: 'AddArtistController'
    });

  $locationProvider.html5Mode(true);

}]);