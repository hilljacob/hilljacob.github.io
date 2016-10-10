angular.module('jakeNo').service('movieServ', function($http){

  // movie searching api
var startUrl ='https://www.omdbapi.com/?t=';
var endUrl = '&y=&plot=short&r=json';

//get movie searching Api
this.getMovie = function(movie){
  return $http({
    method: 'GET',
    url: startUrl + movie + endUrl
    //url: 'http://www.omdbapi.com/?t=rudy&y=&plot=short&r=json'
  })
}

})
