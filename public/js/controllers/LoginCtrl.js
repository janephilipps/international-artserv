angular.module('LoginCtrl', ['LoginService']).controller('LoginController', ['$scope', 'Login', function($scope, Login) {

  $scope.message = '';

  $scope.login = function() {
    Login.login($scope.user).then(
      function(user) {
        $scope.message = 'Welcome: ' + user.data.email;
      },
      function(error) {
        $scope.message = 'Bad login';
      }
    );
  };

}]);
