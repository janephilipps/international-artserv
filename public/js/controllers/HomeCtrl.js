angular.module('HomeCtrl', []).controller('HomeController', function($scope, Artists) {

  $scope.test = 'hello';

  $scope.Artists = Artists;

  $scope.expandArtistInfo = function (index) {
    if ($scope.showArtistInfo(index)) {
      $scope.artistIndex = null;
    } else {
      $scope.artistIndex = index;
    }
  }

  $scope.artistExpandedClass = function (index) {
    if ($scope.showArtistInfo(index)) {
      return "artist-border";
    } else {
      return null;
    }
  }

  $scope.showArtistInfo = function (index) {
    return $scope.artistIndex === index;
  }

});
