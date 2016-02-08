var app = angular.module('artservApp', [
  'ngRoute',
  'appRoutes',
  'HomeCtrl',
  'AddArtistCtrl',
  'LoginCtrl'
  ]);

app.directive('appNavbar', function() {
  return {
    templateUrl: '/views/layouts/navbar.html'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: '/views/layouts/footer.html'
  };
});
