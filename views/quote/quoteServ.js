angular.module('jakeNo').service('quoteServ', function($http){

  // quote of the day api
  var mainQod = 'http://quotes.rest/qod.json'
  //var funny = '?category=funny', inspire = '?category=inspire', love ='?category=love', sports = '?category=sports';
  this.getQ = function(){
      return $http({
        method: 'GET',
        url: mainQod,
      })
    }

  // Quote from a category
    this.getFun = function(cat){
        return $http({
          method: 'GET',
          url: mainQod + cat,
        })
      }


      // art = '?category=art',
      // life = '?category=life',
      // management = '?category=management',
      // students = '?category=students'

})
