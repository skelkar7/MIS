'use strict';

/*
  helper service to communicate between two controllers.
*/
angular.module('myMisAppApp')
  .service('LoginService', function($rootScope) {

    this.employee = null;

    this.broadcast = function(emp) {
      this.employee = emp;
      $rootScope.$broadcast('loginEvent');
    };

    this.getCurrEmployee = function() {
      return this.employee;
    };
    
    return this;
  });