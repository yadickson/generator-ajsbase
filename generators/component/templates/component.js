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
              <div data-ng-controller='SampleCtrl'>
                <input type='text' data-ng-model="value" />
                <<%= htmlname %> data-my-binding="{{value}}"></<%= htmlname %>>
              </div>
           </file>
           <file name="script.js">
               angular
                   .module('<%= modulename %>', [])
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
                this.myTitle = '<%= name %>';
            },
            template: '<h1>{{ $ctrl.myTitle }} {{ $ctrl.myBinding }}</h1>'
        });

})();
