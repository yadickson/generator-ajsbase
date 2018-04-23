(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= modulename %>.constant:<%= varname %>
     *
     * @description
     * Description of the constant <%= varname %>
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
                        this.value = 'Hello constant <%= varname %>: ' + <%= varname %>;
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .constant('<%= varname %>', '<%= name %>');

})();
