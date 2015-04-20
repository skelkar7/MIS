'use strict';

/**
 * @ngdoc function
 * @name myMisAppApp.controller:EmployeectrlCtrl
 * @description
 * # EmployeectrlCtrl
 * Controller of the myMisAppApp
 */
angular.module('myMisAppApp')
  .controller('LoginCtrl', function ($scope, EmployeeDumpService, LoginService) {

    $scope.employees = null;
    
    //diff between $http.success and $http.get: http://stackoverflow.com/questions/27999899/angularjs-http-get-difference-between-then-and-success-callback
    $scope.loadEmployees = function() {
      EmployeeDumpService.getEmployeeData().then(function(response) {
        $scope.employees = response.data;
      });
    };
    
    $scope.loadEmployees();
    
    $scope.showLoginWindow = true;
    $scope.invalidLogin = false;

    $scope.login = function(username, password) {
      LoginService.setCurrEmployee(null);
      angular.forEach($scope.employees, function(employee) {
        if(employee.username === username && employee.password === password)
        {
          LoginService.broadcast(employee);
          $scope.showLoginWindow = false;
          $scope.invalidLogin = false;
        }
      });

      if(LoginService.getCurrEmployee() === null)
      {
        $scope.invalidLogin = true;
      }
      $scope.username = $scope.password = null;
    };

    $scope.logout = function() {
      LoginService.broadcast(null);
      $scope.showLoginWindow = true;
    };
  });
