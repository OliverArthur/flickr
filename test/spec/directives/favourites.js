'use strict';

describe('Directive: flFavourites', function () {

  // load the directive's module
  beforeEach(module('flickrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<data-fl-favourites></data-fl-favourites>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flFavourites directive');
  }));
});
