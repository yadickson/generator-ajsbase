(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= modulename %>.factory:<%= varname %>
     *
     * @description
     * Description of the factory <%= varname %>
     * @example
       <example module="<%= modulename %>">
           <file name="index.html">
              <div data-ng-controller='SampleCtrl'>
                {{value}}
              </div>
           </file>
           <file name="script.js">
               angular
                   .module('<%= modulename %>', [])
                   .controller('SampleCtrl', ['<%= varname %>'], function (<%= varname %>) {
                        this.value = 'Hello factory ' + <%= varname %>.someMethod();
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
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
