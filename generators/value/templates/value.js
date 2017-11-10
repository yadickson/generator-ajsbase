(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.value:<%= varname %>
     *
     * @description
     * Description of the value <%= varname %>
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
                        this.value = 'Hello value ' + <%= varname %>;
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= projectModule %>')
        .value('<%= varname %>', '<%= name %>');

})();
