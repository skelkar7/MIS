'use strict';

describe('Directive: myLoginBox', function () {

  // load the directive's module
  beforeEach(module('myMisAppApp'));

  var element,
    scope;

  describe('template', function() {
  
    var compile, scope, httpBackend;
  
    beforeEach(module('templates'));
    
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      compile = $compile;
    }));

    it('should make hidden element visible', inject(function () { 

      element = angular.element('<my-login-box></my-login-box>');
      
      var template = compile(element)(scope);
      
      //element = $compile(element)(scope);
      //expect(element.text()).toBe('this is the myLoginBox directive');
      
      scope.showLoginWindow = true;
      scope.text = "scouty";
      
      scope.$digest();
      
      expect(template.html()).toContain("scouty");
    }));
  
  
  });  
});
