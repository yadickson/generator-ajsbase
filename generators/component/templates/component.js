(function() {
    'use strict';

    /**
     * @ngdoc component
     * @name <%= projectModule %>.component:<%= varname %>
     *
     * @description
     * Description of the component <%= varname %>
     *
     * @example
       <example module="sampleModule">
           <file name="index.html">
              <div data-ng-controller='SampleCtrl'>
                <input type='text' data-ng-model="outside" />
                <<%= htmlname %> data-my-binding="{{value}}"></<%= htmlname %>>
              </div>
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
