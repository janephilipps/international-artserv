var app = angular.module('artservApp', [
  'ngRoute',
  'appRoutes',
  'HomeCtrl',
  'AddArtistCtrl',
  'LoginCtrl',
  'NavbarCtrl'
  ]);

app.directive('appNavbar', function() {
  return {
    templateUrl: '/views/layouts/navbar.html',
    controller: 'NavbarController'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: '/views/layouts/footer.html'
  };
});
