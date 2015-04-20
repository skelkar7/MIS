'use strict';

describe('Service: Loginservice', function () {

  // load the service's module
  beforeEach(module('myMisAppApp'));

  // instantiate service
  var service, fakeEmp, rootScope;
  beforeEach(inject(function (LoginService, $rootScope) {
    service = LoginService;
    rootScope = $rootScope;

    //create a mock employee for testing    
    fakeEmp = {
      name: 'Robb Stark'
    };

    //spyOn acts like a watcher on any function of object we are calling   
    spyOn(service, 'getCurrEmployee').and.callThrough(); //will callThrough(), spy will track the call but actual implementation will be called.
    spyOn(rootScope, '$broadcast');

    service.broadcast(fakeEmp);        
  }));


  it('spy on broadcast was called', function () {
    
    //internally LoginService's broadcast method calls rootScope's broadcast method. We are spying on that.
    expect(rootScope.$broadcast).toHaveBeenCalledWith('loginEvent');
  });
  
  it('check fetched emp', function () {
    var fetchedEmp = service.getCurrEmployee();
    expect(fetchedEmp).toEqual({name: 'Robb Stark'});
  });
});
