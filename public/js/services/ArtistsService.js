angular.module('ArtistsService', []).factory('Artists', ['$http', function($http) {

  return {
    all: function() {
      return $http.get('/api/artists');
    },

    byId: function(id) {
      return $http.get('/api/artists/' + id);
    },

    create: function(artist) {
      return $http.post('/api/artists', artist);
    }
  }

}]);
