(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= modulename %>.value:<%= varname %>
     *
     * @description
     * Description of the value <%= varname %>
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
                        this.value = 'Hello value <%= varname %>: ' + <%= varname %>;
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .value('<%= varname %>', '<%= name %>');

})();
