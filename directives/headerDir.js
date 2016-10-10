angular.module('jakeNo')
  .directive('jakeNoNav', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/headerdir.html',
      scope:{
      changeColor: '&'
  },
    }
  })
