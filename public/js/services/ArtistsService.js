angular.module('ArtistsService', []).factory('Artists', ['$http', function($http) {

  return {
    get : function() {
        return $http.get('/api/artists');
    }

  }

}]);
