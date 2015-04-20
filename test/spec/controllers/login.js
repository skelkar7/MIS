'use strict';

/*
    Some hecked up way to test $http service.
    $http returns a promise. We will use $q API to simulate the return of promise. $q.defer() will return a promise. And using spyOn, we will return this promise of the service's getEmployeeData() method, which actually returns a $http promise.

    This test is based on: http://entwicklertagebuch.com/blog/2013/10/how-to-handle-angularjs-promises-in-jasmine-unit-tests/
    http://jsfiddle.net/eitanp461/vjJmY/
 */

describe('Controller: LoginCtrl', function () {
  var fakeEmp, loginCtrl, scope, rootScope, empDumpService, loginService;
  var deferred, promise, resolvedValue;

  fakeEmp = [{
    'username': 'uu',
    'password': 'pp'
  }];
    
  beforeEach(module('myMisAppApp'));
  
  beforeEach(function() {
    inject(function($controller, $rootScope, $q, EmployeeDumpService, LoginService) {
      rootScope = $rootScope;
      empDumpService = EmployeeDumpService;
      loginService = LoginService;
      
      //$http's get method returns a promise. $q is some library to deal with promises. 
      deferred = $q.defer();
      promise = deferred.promise;           
      
      spyOn(EmployeeDumpService, 'getEmployeeData').and.returnValue(promise);

      scope = $rootScope.$new();
      loginCtrl = $controller('LoginCtrl', {
        $scope: scope
      }); 
      

    });  
  });

  
  it('getEmployeeData function of service is called', function() {
    scope.loadEmployees();
    
    expect(empDumpService.getEmployeeData).toHaveBeenCalled();
  });

  it('should load the fake data in resolvedValue variable', function() {
  //just tests if promise is working fine, but doesn't load the desired value in controller variable 'employees'.

    promise.then(function(value) {
      resolvedValue = value;  
      //scope.employees = value;    this doesn't work :-( 
    });
    deferred.resolve(fakeEmp);
    
    scope.loadEmployees(); //internally calls EmployeeDumpService.getEmployeeData()

    rootScope.$apply(); /* This is called manually because promises only get resolved during a angular $digest phase. After this method is finished, all promises are really resolved and you can test for the expected outcome. */

    expect(resolvedValue).toEqual(fakeEmp);  
    
  });
  
  //sample jasmine test to practice promises
  it('learn promises', inject(function($q, $rootScope) {

    var deferred = $q.defer();
    var promise = deferred.promise;
    var resolvedValue;
    
    promise.then(function(value) {
      resolvedValue = value;
    });
    
    expect(resolvedValue).toBeUndefined();

    deferred.resolve(234);    
    
    expect(resolvedValue).toBeUndefined();
    
    $rootScope.$apply();
    
    expect(resolvedValue).toEqual(234);

    expect(resolvedValue).toBeDefined();
    
  }));  
  

  describe('Controller: LoginCtrl: Login process', function() {
  
    var loginService;
    
    beforeEach(function() {
      inject(function(LoginService) {
        loginService = LoginService;
        
        spyOn(loginService, 'broadcast').and.callThrough();

        scope.employees = fakeEmp;
      });    
    });
    
    it('should not login with invalid value', function() {
      scope.login(null, null);
    
      expect(loginService.broadcast).toHaveBeenCalledWith(null);
      
      expect(scope.invalidLogin).toBe(true);      
    });
    
    it('should login with valid value', function() {
      scope.login('uu', 'pp');
    
      expect(loginService.broadcast).toHaveBeenCalledWith(fakeEmp[0]);
      
      expect(scope.invalidLogin).toBe(false);      
    });
    
    it('should logout', function() {
      scope.logout();
      
      expect(loginService.broadcast).toHaveBeenCalledWith(null);
      
      expect(scope.showLoginWindow).toBe(true);
    });
  
  });
});