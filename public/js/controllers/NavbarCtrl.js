angular.module('NavbarCtrl', []).controller('NavbarController', [
  '$scope', '$rootScope', function($scope, $rootScope) {

  $scope.welcomeMessage = 'Not logged in';

  $rootScope.$on('login-success', function(event, user) {
    $scope.welcomeMessage = "Welcome: " + user.data.email;
  });

}]);
