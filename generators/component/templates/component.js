(function() {
    'use strict';

    /**
     * @ngdoc component
     * @name <%= modulename %>.component:<%= varname %>
     *
     * @description
     * Description of the component <%= varname %>
     *
     * @example
       <example module="<%= modulename %>">
           <file name="index.html">
              <div data-ng-controller='SampleCtrl as sample'>
                <input type='text' data-ng-model="sample.value" />
                <<%= htmlname %> data-my-binding="{{sample.value}}"></<%= htmlname %>>
              </div>
           </file>
           <file name="script.js">
               angular
                   .module('<%= modulename %>')
                   .controller('SampleCtrl', [function () {
                        this.value = 'value';
                   }]);
           </file>
       </example>
     */
    angular
        .module('<%= modulename %>')
        .component('<%= varname %>', {
            bindings: {
                myBinding: '@'
            },
            controller: function() {
                this.myTitle = 'Hello component <%= varname %>';
            },
            template: '<h1>{{ $ctrl.myTitle }}: {{ $ctrl.myBinding }}</h1>'
        });

})();
