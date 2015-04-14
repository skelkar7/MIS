'use strict';

describe('Directive: myLoginBox', function () {

  // load the directive's module
  beforeEach(module('myMisAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-login-box></my-login-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myLoginBox directive');
  }));
});
