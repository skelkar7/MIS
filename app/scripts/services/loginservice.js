'use strict';

/*
  helper service to communicate between two controllers.
*/
angular.module('myMisAppApp')
  .service('LoginService', function($rootScope) {
    var sharedService = {};

    sharedService.employee = null;

    sharedService.broadcast = function(emp) {
      this.employee = emp;
      $rootScope.$broadcast('loginEvent');
    };

    sharedService.getCurrEmployee = function() {
      return this.employee;
    };

    sharedService.setCurrEmployee = function(emp) {
      this.employee = emp;
    };
    
    return sharedService;
  });