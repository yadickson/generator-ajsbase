(function() {
    'use strict';

    /**
     * @ngdoc filter
     * @name <%= modulename %>.filter:<%= varname %>
     *
     * @description
     * Description of the filter <%= varname %>
     *
     * @example
       <example module="<%= modulename %>">
           <file name="index.html">
               <div data-ng-controller='SampleCtrl as sample'>
                  {{ sample.value | <%= varname %> }}
              </div>
           </file>
           <file name="script.js">
               angular
                   .module('<%= modulename %>')
                   .controller('SampleCtrl', [function () {
                        this.value = 'value';
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .filter('<%= varname %>', [function() {
            return function(input) {
                return 'Hello filter <%= varname %>: ' + input;
            };
        }]);

})();
