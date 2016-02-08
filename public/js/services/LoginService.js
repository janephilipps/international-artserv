angular.module('LoginService', []).factory('Login', ['$http', function($http) {

  return {
    login: function(user) {
      return $http.post('/api/login', user);
    }
  }

}]);
