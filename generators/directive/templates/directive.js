(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name <%= projectModule %>.directive:<%= varname %>
     * @scope
     * @restrict E
     *
     * @description
     * Description of the directive <%= varname %>
     * 
     * @example
       <example module="sampleModule">
           <file name="index.html">
               <<%= htmlname %>></<%= htmlname %>>
           </file>
           <file name="script.js">
               angular
                   .module('sampleModule', ['<%= projectModule %>'])
                   .controller('SampleCtrl', function () {});
           </file>
       </example>
     */
    angular
        .module('<%= projectModule %>')
        .directive('<%= varname %>', function() {

            return {
                template: '<div></div>',
                restrict: 'E',
                link: function postLink(scope, element, attrs) {
                    element.text('this is the <%= varname %> directive');
                }
            }
        });

})();