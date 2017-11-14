(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name <%= modulename %>.directive:<%= varname %>
     * @scope
     * @restrict E
     *
     * @description
     * Description of the directive <%= varname %>
     * 
     * @example
       <example module="<%= modulename %>">
           <file name="index.html">
               AngularJS directive sample
               <<%= htmlname %>></<%= htmlname %>>
           </file>
           <file name="script.js">
               angular.module('<%= modulename %>', []);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .directive('<%= varname %>', function() {

            return {
                template: '<div></div>',
                restrict: 'E',
                link: function postLink(scope, element, attrs) {
                    element.text('this is the <%= varname %> directive');
                }
            };
        });

})();
