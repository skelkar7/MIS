'use strict';

/**
 * @ngdoc directive
 * @name myMisAppApp.directive:myLoginBox
 * @description
 * # myLoginBox
 */
angular.module('myMisAppApp')
  .directive('myLoginBox', function () {
    return {
      templateUrl: 'views/login.html',
      restrict: 'E',
      controller: 'LoginCtrl'
    };
  });
