  (function() {
      'use strict';

      describe('Service:<%= varname %>', function() {
          describe('Test module and service', function() {

              // load the module
              beforeEach(angular.mock.module('<%= modulename %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= name %>_) {
                  <%= name %> = _<%= name %>_;
              }));

              it('Check service <%= varname %>', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check <%= name %>.name', function() {
                  expect(<%= name %>.name).to.be.equal('<%= varname %>');
              });
          });
      });
  })();
