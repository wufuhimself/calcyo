'use strict';

/**
 * @ngdoc overview
 * @name calcyoApp
 * @description
 * # calcyoApp
 *
 * Main module of the application.
 */
angular
  .module('calcyoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
