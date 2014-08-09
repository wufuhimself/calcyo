'use strict';

/**
 * @ngdoc function
 * @name calcyoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calcyoApp
 */
angular.module('calcyoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
