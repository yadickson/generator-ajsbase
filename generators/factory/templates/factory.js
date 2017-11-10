(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.factory:<%= varname %>
     *
     * @description
     * Description of the factory <%= varname %>
     * @example
       <example module="sampleModule">
           <file name="index.html">
              <div data-ng-controller='SampleCtrl'>
                {{value}}
              </div>
           </file>
           <file name="script.js">
               angular
                   .module('sampleModule', ['<%= projectModule %>'])
                   .controller('SampleCtrl', [''<%= varname %>], function (<%= varname %>) {
                        this.value = 'Hello factory ' + <%= varname %>.someMethod();
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= projectModule %>')
        .factory('<%= varname %>', function() {
            // Service logic
            // ...

            var name = '<%= name %>';

            // Public API here
            return {
                someMethod: function() {
                    return name;
                }
            };
        });

})();
