(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.constant:<%= varname %>
     *
     * @description
     * Description of the constant <%= varname %>
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
                        this.value = 'Hello constant ' + <%= varname %>;
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= projectModule %>')
        .constant('<%= varname %>', '<%= name %>');

})();
