'use strict';

describe('Controller: EmployeedetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('myMisAppApp'));

  var EmployeedetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeedetailsCtrl = $controller('EmployeedetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
