'use strict';

/**
 * @ngdoc service
 * @name myMisAppApp.employeeDumpService
 * @description
 * # employeeDumpService
 * Service in the myMisAppApp.
 *
 */

angular.module('myMisAppApp')
  .service('EmployeeDumpService', function($http) {
    return {
      getEmployeeData: function() {
        return $http.get('data/employees.json');
      }
    };
  });