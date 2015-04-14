'use strict';

/**
 * @ngdoc directive
 * @name myMisAppApp.directive:myEmployeeInfoBox
 * @description
 * # myEmployeeInfoBox
 */
angular.module('myMisAppApp')
  .directive('myEmployeeInfoBox', function () {
    return {
      templateUrl: 'views/employeeinfo.html',
      restrict: 'E',
      controller: 'EmployeedetailsCtrl'
    };
  });
