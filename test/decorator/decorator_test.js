'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:decorator', () => {
    describe('Check decorator info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/decorator'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should decorator file contain modulename', () => {
            assert.fileContent('decorators/numeric_decorator.js', ".module('appModule')");
        });

        it('should decorator file contain name', () => {
            assert.fileContent('decorators/numeric_decorator.js', ".decorator('numericService',");
        });

        it('should decorator test file', () => {
            assert.file(['test/spec/decorators/numeric_decorator_test.js']);
        });
    });

});
