angular.module('ArtistsService', []).factory('Artists', ['$http', function($http) {

  return {
    all: function() {
      return $http.get("/api/artists");
    }
  }

}]);
