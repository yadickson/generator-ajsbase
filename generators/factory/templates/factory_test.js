  (function() {
      'use strict';

      describe('Factory:<%= varname %>', function() {
          describe('Test module and factory', function() {

              // load the module
              beforeEach(angular.mock.module('<%= modulename %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= name %>_) {
                  <%= name %> = _<%= name %>_;
              }));

              it('Check factory <%= varname %>', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check <%= name %>.someMethod()', function() {
                  expect(<%= name %>.someMethod()).to.be.equal('<%= varname %>');
              });
          });
      });
  })();
