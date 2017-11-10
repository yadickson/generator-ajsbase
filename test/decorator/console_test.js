'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:decorator', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/decorator'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should decorator file contain name', () => {
            assert.fileContent('decorators/excel_decorator.js', ".decorator('excel',");
        });

        it('should decorator test file', () => {
            assert.file(['test/spec/decorators/excel_decorator_test.js']);
        });

    });
});