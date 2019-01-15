(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= modulename %>.service:<%= name %>
     *
     * @description
     * Description of the service <%= varname %>
     *
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
                        this.value = 'Hello service ' + <%= name %>.name;
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .service('<%= name %>', [function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            var vm = this;
            vm.name = '<%= varname %>';
        }]);

})();
