angular.module('HomeCtrl', ['ArtistsService']).controller('HomeController', ['$scope', 'Artists', function($scope, Artists) {

  $scope.test = 'hello';

  Artists.all().success(function(artists) {
    $scope.Artists = artists;
  })

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

}]);
