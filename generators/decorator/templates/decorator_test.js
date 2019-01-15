  (function() {
      'use strict';

      describe('Decorator:<%= varname %>Service', function() {
          describe('Test module and decorator', function() {

              // load the module
              beforeEach(angular.mock.module('<%= modulename %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= varname %>Service_) {
                  <%= name %> = _<%= varname %>Service_;
              }));


              it('Check <%= name %>.help()', function() {
                  expect(<%= name %>.help()).to.be.equal('<%= name %>');
              });

          });
      });
  })();
