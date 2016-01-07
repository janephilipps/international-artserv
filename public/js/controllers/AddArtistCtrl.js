angular.module('AddArtistCtrl', []).controller('AddArtistController', function($scope, Artists) {

  $scope.Artists = Artists;

  $scope.artist = {};

  $scope.addArtist = function () {
    $scope.Artists.push($scope.artist);
    $scope.artist = {};
    alert('artist added!')
  }

});