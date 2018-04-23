  (function() {
      'use strict';

      describe('Directive:<%= varname %>', function() {
          describe('Test module and direcitive', function() {

              // load the module
              beforeEach(angular.mock.module('<%= modulename %>'));

              var element,
                  scope;

              beforeEach(inject(function($rootScope) {
                  scope = $rootScope.$new();
              }));

              it('should make hidden element visible', inject(function($compile) {
                  element = angular.element('<<%= htmlname %>></<%= htmlname %>>');
                  element = $compile(element)(scope);
                  expect(element.text()).to.be.equal('Hello directive <%= varname %>');
              }));
          });
      });
  })();
