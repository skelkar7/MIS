'use strict';

describe('Directive: myEmployeeInfoBox', function () {
  var element, compile, scope, currEmp;
    
  currEmp = {
    name: 'scout'
  };
    
  // load the directive's module
  beforeEach(function() {
    module('templates');    
    module('myMisAppApp', function($controllerProvider) {
      
      $controllerProvider.register('EmployeedetailsCtrl', function($scope) {
        $scope.currEmp = currEmp;
        $scope.applyLeaves = function(from, to) {}
      });
    });
  });
  


  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
    element = angular.element('<my-employee-info-box></my-employee-info-box>');
    
  }));

  it('should display correct employee name', inject(function ($compile) {
    
    element = compile(element)(scope);    
    scope.$digest();
    
    expect(element.find('b').text()).toContain('scout');
  }));
  
});
