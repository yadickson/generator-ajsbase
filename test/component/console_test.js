'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:component', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/component'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should component file contain name', () => {
            assert.fileContent('components/excel_component.js', ".component('excel',");
        });

        it('should component test file', () => {
            assert.file(['test/spec/components/excel_component_test.js']);
        });

    });
});
