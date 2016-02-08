angular.module('LoginCtrl', ['LoginService']).controller('LoginController', [
  '$scope', '$location', '$rootScope', 'Login',
  function($scope, $location, $rootScope, Login) {

  $scope.message = '';

  $scope.login = function() {
    Login.login($scope.user).then(
      function(user) {
        $rootScope.$broadcast('login-success', user);
        $location.path('/');
      },
      function(error) {
        $scope.message = 'Bad login';
      }
    );
  };

}]);
