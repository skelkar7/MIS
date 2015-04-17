'use strict';


describe('Controller: LoginCtrl', function () {
  var fakeEmp, loginCtrl, scope, rootScope, empDumpService;

  fakeEmp = [{
    "username": "uu",
    "password": "pp"
  }];
    
  beforeEach(module('myMisAppApp'));
  
  beforeEach(function() {
    inject(function($controller, $rootScope, $q, EmployeeDumpService) {
      rootScope = $rootScope;
      empDumpService = EmployeeDumpService;
      
      //$http's get method returns a promise. $q is some library to deal with promises. 
      var deferred = $q.defer();
            
      deferred.resolve(fakeEmp);
      
      spyOn(EmployeeDumpService, 'getEmployeeData').and.returnValue(deferred.promise);
      scope = $rootScope.$new();
      
      loginCtrl = $controller('LoginCtrl', {
        $scope: scope
      });        
    });  
  });
  
  it('getEmployeeData function of service is called', function() {
    scope.loadEmployees();
    rootScope.$apply();
    expect(empDumpService.getEmployeeData).toHaveBeenCalled();
  });
  
  it('should load the fake data', function() {
    scope.loadEmployees();
    rootScope.$apply();
    expect(scope.employees).toBe(fakeEmp);
  });  
});