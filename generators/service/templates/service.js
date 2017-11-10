(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.service:<%= varname %>
     *
     * @description
     * Description of the service <%= varname %>
     *
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
                        this.value = 'Hello factory ' + <%= varname %>.name;
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= projectModule %>')
        .service('<%= varname %>', function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            this.name = '<%= name %>';
        });

})();