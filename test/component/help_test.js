'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:component', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/component'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should component file contain name', () => {
            assert.fileContent('components/none_component.js', ".component('none',");
        });

        it('should component test file', () => {
            assert.file(['test/spec/components/none_component_test.js']);
        });
    });
});
