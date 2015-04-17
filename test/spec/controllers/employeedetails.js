'use strict';

describe('Controller: EmployeedetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('myMisAppApp'));

  var EmployeedetailsCtrl,
    scope, fakeEmp;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeedetailsCtrl = $controller('EmployeedetailsCtrl', {
      $scope: scope
    });
    
    fakeEmp = {
      leavesTaken: 0
    };
    spyOn(scope, 'applyLeaves').and.callThrough();
  }));

  it('controller should exist', function () {
    expect(!!EmployeedetailsCtrl).toBe(true);
  });
  
  it('date not supplied', function() {
    scope.applyLeaves(null, null);
    
    expect(scope.dateRequired).toBe(true);
    expect(scope.periodInvalid).toBe(false);
    expect(scope.leaveApplied).toBe(false);
    expect(!!scope.leaveDays).toBe(false);
  });
  
  it('invalid period selected - to date less than from date', function() {
    var from = new Date();
    var to   = new Date();
    to.setDate(from.getDate() - 2);
    
    scope.currEmp = fakeEmp;
    scope.applyLeaves(from, to);
    
    expect(scope.dateRequired).toBe(false);
    expect(scope.periodInvalid).toBe(true);
    expect(scope.leaveApplied).toBe(false);
    expect(!!scope.leaveDays).toBe(false);
  });

  it('leaves applied for 3 days', function() {
    var from = new Date();
    var to   = new Date();
    to.setDate(from.getDate() + 2); //leaves = from day + (to - from) days
    
    scope.currEmp = fakeEmp;
    scope.applyLeaves(from, to);
    
    expect(scope.dateRequired).toBe(false);
    expect(scope.periodInvalid).toBe(false);
    expect(scope.leaveApplied).toBe(true);
    expect(scope.leaveDays).toBe(3);
  });
  
});
