'use strict';

describe('Service: employeeDumpService', function () {

  // load the service's module
  beforeEach(module('myMisAppApp'));

  // instantiate service
  var employeeDumpService;
  beforeEach(inject(function (_employeeDumpService_) {
    employeeDumpService = _employeeDumpService_;
  }));

  it('should do something', function () {
    expect(!!employeeDumpService).toBe(true);
  });

});
