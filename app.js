angular.module('jakeNo', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'views/home/home.html'
      })
      .state('movie', {
        url: '/movie',
        controller: 'movieCtrl',
        templateUrl: 'views/movie/movie.html'
      })
      .state('quote', {
        url: '/quote',
        controller: 'quoteCtrl',
        templateUrl: 'views/quote/quote.html'
      })



})
