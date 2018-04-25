(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= modulename %>.service:<%= varname %>
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
                   .controller('SampleCtrl', ['<%= varname %>', function (<%= varname %>) {
                        this.value = 'Hello service ' + <%= varname %>.name;
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .service('<%= varname %>', [function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            var vm = this;
            vm.name = '<%= name %>';
        }]);

})();
