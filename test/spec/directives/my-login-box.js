'use strict';

describe('Directive: myLoginBox', function () {

  var element, scope;
  var compile, template;
  
  // load the directive's modules    
  // 'templates' module contains all preprocessed templates, as configured in karma.conf.js
  // $controllerProvider.register is used to create a mock controller for testing, to avoid dealing with $http dependencies of the -actual LoginCtrl
  // Useful link: http://www.powdertothepeople.tv/2014/08/28/Mocking-Controller-Instantiation-In-AngularJS-Unit-Test/
  // another: http://www.benlesh.com/2013/06/angular-js-unit-testing-directives.html
  beforeEach(function() {
    module('templates');

    module('myMisAppApp', function($controllerProvider) {

      $controllerProvider.register('LoginCtrl', function($scope) {
        $scope.showLoginWindow = false;
        $scope.invalidLogin = false;
        $scope.scouttty = 'lala';
        $scope.login = function(uname, pass) {};

        $scope.loadEmployees = function() {};        
      });
    });
  });
        
  beforeEach(inject(function ($compile, $rootScope) {
    //create a scope (you could just use $rootScope, I suppose)
    scope = $rootScope.$new();
    compile = $compile;
    
    //get the jqLite or jQuery element
    element = angular.element('<my-login-box></my-login-box>');

    // Following line can be broken into two steps:
    // compiled = compile(element); // compile the element into a function to process the view
    // template = compiled(scope); // run the compiled view against the scope we created
    template = compile(element)(scope);
    
    // to update your view and model.
    scope.$digest();
  }));
  

  it('should show or hidden elements based on visibility', inject(function () { 

    scope.showLoginWindow = false;
    scope.$digest();

    //Testing ng-show http://stackoverflow.com/a/19292677
    expect(element.find('form').hasClass('ng-hide')).toBe(true);
    expect(element.find('button').hasClass('ng-hide')).toBe(false);    


    scope.showLoginWindow = true;
    scope.$digest();

    expect(element.find('form').hasClass('ng-hide')).toBe(false);
    expect(element.find('button').hasClass('ng-hide')).toBe(true);    
  }));
  
  
});
