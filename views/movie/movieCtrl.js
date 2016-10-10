angular.module('jakeNo').controller('movieCtrl', function($scope, movieServ){



        $scope.addPlus =function(movieTitle) {
          var titlePlus = movieTitle.split(' ').join('+');
          movieServ.getMovie(titlePlus).then(function(response){
            $scope.movie = response.data;
            if ($scope.movie.Poster === 'N/A') {
              $scope.toggle = false;
            } else {
              $scope.toggle = true;
            }
            console.log(response.data);
          })
        }
        
        $scope.please = true;
        $scope.showtext = function(cb){
          if(cb === true){
            $scope.please = false;
          }
        }
        $scope.movieInfo = function(movie){
            if(movie === true){
            return false;
          }
          return true;
        }



        // movieServ.getMovie().then(function(response){
        //   $scope.movie = response.data;
        //   console.log(response.data);
        // })

})
