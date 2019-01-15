(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= modulename %>.factory:<%= name %>
     *
     * @description
     * Description of the factory <%= varname %>
     * @example
       <example module="<%= modulename %>">
           <file name="index.html">
              <div data-ng-controller='SampleCtrl as sample'>
                {{sample.value}}
              </div>
           </file>
           <file name="script.js">
               angular
                   .module('<%= modulename %>')
                   .controller('SampleCtrl', ['<%= name %>', function (<%= name %>) {
                        var vm = this;
                        vm.value = 'Hello factory ' + <%= name %>.someMethod();
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .factory('<%= name %>', [function() {
            // Service logic
            // ...

            var vm = this;
            vm.name = '<%= varname %>';

            // Public API here
            return {
                someMethod: function() {
                    return vm.name;
                }
            };
        }]);

})();
