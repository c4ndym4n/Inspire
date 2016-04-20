'use strict';

describe('Directive: confirmPass', function () {

  // load the directive's module
  beforeEach(module('projectInspireDevApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<confirm-pass></confirm-pass>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the confirmPass directive');
  }));
});
