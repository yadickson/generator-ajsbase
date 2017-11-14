(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name <%= modulename %>.controller:<%= varname %>
     *
     * @description
     * Description of the controller <%= varname %>
     */
    angular
        .module('<%= modulename %>')
        .controller('<%= varname %>', function() {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Mocha'
            ];
        });

})();
