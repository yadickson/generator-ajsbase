(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name <%= modulename %>.decorator:<%= varname %>
     *
     * @requires <%= varname %>
     *
     * @description
     * Description of the decorator to <%= varname %>
     */
    angular
        .module('<%= modulename %>')
        .config(['$provide', function($provide) {
            $provide.decorator('<%= varname %>', ['$delegate', function($delegate) {
                // decorate the $delegate

                function newHelp() {
                    return '<%= name %>';
                }

                $delegate.help = newHelp;

                return $delegate;
            }]);
        }]);
})();
