'use strict';

/**
 * @ngdoc function
 * @name myMisAppApp.controller:EmployeectrlCtrl
 * @description
 * # EmployeectrlCtrl
 * Controller of the myMisAppApp
 */
angular.module('myMisAppApp')
  .controller('LoginCtrl', function (EmployeeDumpService, LoginService) {

    var vm = this;
    vm.employees = null;
    
    //diff between $http.success and $http.get: http://stackoverflow.com/questions/27999899/angularjs-http-get-difference-between-then-and-success-callback
    vm.loadEmployees = function() {
      EmployeeDumpService.getEmployeeData().then(function(response) {
        vm.employees = response.data;
      });
    };
    
    vm.loadEmployees();
    
    vm.showLoginWindow = true;
    vm.invalidLogin = false;
    
    vm.login = function(username, password) {

      var currEmp = null;
    
      angular.forEach(vm.employees, function(employee) {
        if(employee.username === username && employee.password === password)
        {
          currEmp = employee;
          vm.showLoginWindow = false;
          vm.invalidLogin = false;
        }        
      });

      LoginService.broadcast(currEmp);
      if(LoginService.getCurrEmployee() === null)
      {
        vm.invalidLogin = true;
      }
      vm.username = vm.password = null;
    };

    vm.logout = function() {
      LoginService.broadcast(null);
      vm.showLoginWindow = true;
    };
    
    return vm;
  });
