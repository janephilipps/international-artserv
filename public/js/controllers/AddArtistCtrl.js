angular.module('AddArtistCtrl', ['ArtistsService']).controller('AddArtistController', function($scope, Artists) {

  $scope.artist = {};

  var resetArtist = function() {
    $scope.artist = {};
  }

  $scope.addArtist = function (artist) {
    Artists.create($scope.artist).then(function () {
      resetArtist();
    });
  }

});