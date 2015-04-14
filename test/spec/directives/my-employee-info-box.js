'use strict';

describe('Directive: myEmployeeInfoBox', function () {

  // load the directive's module
  beforeEach(module('myMisAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-employee-info-box></my-employee-info-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myEmployeeInfoBox directive');
  }));
});
