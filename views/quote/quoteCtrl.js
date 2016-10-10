angular.module('jakeNo').controller('quoteCtrl', function($scope, quoteServ){

   $scope.funnyUrl = '?category=funny';
   $scope.inspireUrl = '?category=inspire';
   $scope.loveUrl = '?category=love';
   $scope.sportsUrl = '?category=sports';

        quoteServ.getQ().then(function(response){
        $scope.time = response.data.contents.quotes[0];
        console.log(response.data.contents.quotes);
      })

$scope.getQuote = function(text){
      quoteServ.getFun(text).then(function(response){
        if(text === $scope.funnyUrl){
          $scope.funny = response.data.contents.quotes[0];
          $scope.funnyImage = {'background-image':'url(' + $scope.funny.background +')'}
          console.log(response.data.contents.quotes);
        }
        else if(text === $scope.inspireUrl){
          $scope.inspire = response.data.contents.quotes[0];
          $scope.inspireImage = {'background-image':'url(' + $scope.inspire.background +')'}
          console.log(response.data.contents.quotes);
        }
        else if(text === $scope.loveUrl){
          $scope.love = response.data.contents.quotes[0];
          $scope.loveImage = {'background-image':'url(' + $scope.love.background +')'}
          console.log(response.data.contents.quotes);
        }
        else if(text === $scope.sportsUrl){
          $scope.sports = response.data.contents.quotes[0];
          $scope.spotrsImage = {'background-image':'url(' + $scope.sports.background +')'}
          console.log(response.data.contents.quotes);
        }
  })
}


})
