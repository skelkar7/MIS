'use strict';

describe('Service: employeeDumpService', function () {

  // load the service's module
  beforeEach(module('myMisAppApp'));

  // instantiate service
  var employeeDumpService, http;
  
  beforeEach(inject(function (EmployeeDumpService, $http) {
    employeeDumpService = EmployeeDumpService;
    http = $http;
    
    spyOn(http, 'get').and.returnValue(101);
    
  }));
 
  it('getEmployeeData should returned the mocked result', function() {
    var result = employeeDumpService.getEmployeeData();
    expect(result).toEqual(101);
  });
});
