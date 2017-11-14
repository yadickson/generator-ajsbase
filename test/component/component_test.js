'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:component', () => {
    describe('Check component info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/component'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should component file contain modulename', () => {
            assert.fileContent('components/numeric_component.js', ".module('appModule')");
        });

        it('should component file contain name', () => {
            assert.fileContent('components/numeric_component.js', ".component('numeric',");
        });

        it('should component test file', () => {
            assert.file(['test/spec/components/numeric_component_test.js']);
        });
    });

});
