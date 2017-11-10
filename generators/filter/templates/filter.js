(function() {
    'use strict';

    /**
     * @ngdoc filter
     * @name <%= projectModule %>.filter:<%= varname %>
     *
     * @description
     * Description of the filter <%= varname %>
     * 
     * @example
       <example module="sampleModule">
           <file name="index.html">
               {{ value | <%= varname %>}}
           </file>
           <file name="script.js">
               angular
                   .module('sampleModule', ['<%= projectModule %>'])
                   .controller('SampleCtrl', function () {
                        this.value = 'value';
                   });
           </file>
       </example>
     */
    angular
        .module('<%= projectModule %>')
        .filter('<%= varname %>', function() {
            return function(input) {
                return '<%= varname %> filter: ' + input;
            };
        });

})();