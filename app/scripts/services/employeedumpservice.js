'use strict';

/**
 * @ngdoc service
 * @name myMisAppApp.employeeDumpService
 * @description
 * # employeeDumpService
 * Service in the myMisAppApp.
 *
angular.module('myMisAppApp')
  .factory('EmployeeDumpService', function ($resource) {
    return $resource('data/employees.json', {}, {
      query: {method:'GET', isArray:true}
    });
  });
*/

angular.module('myMisAppApp')
	.service('EmployeeDumpService', function($http) {
		this.getEmployeeData = function() {
			return $http.get('data/employees.json');
		};
	});