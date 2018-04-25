(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name <%= modulename %>.controller:<%= varname %>
     *
     * @description
     * Description of the controller <%= varname %>
     *
     * @example
        <example module="<%= modulename %>">
            <file name="index.html">
               <div data-ng-controller='<%= varname %> as sample'>
                 {{sample.value}}
               </div>
            </file>
        </example>
     */

    angular
        .module('<%= modulename %>')
        .controller('<%= varname %>', [function() {
            var vm = this;
            vm.value = 'Hello controller <%= varname %>';
        }]);

})();
