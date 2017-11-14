'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:decorator', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/decorator'))
                .withArguments(['numeric', 'decoratorModule', 'src', 'test'])
                .on('end', done);
        });

        it('should decorator file contain modulename', () => {
            assert.fileContent('src/decorators/numeric_decorator.js', ".module('decoratorModule')");
        });

        it('creates src/decorators/numeric_decorator.js', () => {
            assert.file(['src/decorators/numeric_decorator.js']);
        });

        it('creates test/decorators/numeric_decorator_test.js', () => {
            assert.file(['test/decorators/numeric_decorator_test.js']);
        });
    });
});