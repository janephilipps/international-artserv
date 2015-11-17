var app = angular.module('artservApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.test = 'hello';

}]);

app.controller('NavbarCtrl', ['$scope', function ($scope) {

  $scope.nav = 'NAV';

  $scope.addEvent = function () {
    console.log('hi');
  }

}]);

app.directive('appNavbar', function() {
  return {
    templateUrl: './views/layouts/navbar.html',
    controller: 'NavbarCtrl'
  };
});