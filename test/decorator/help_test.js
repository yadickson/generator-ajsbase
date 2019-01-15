'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:decorator', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/decorator'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should decorator file contain name', () => {
            assert.fileContent('decorators/none_decorator.js', ".decorator('noneService',");
        });

        it('should decorator test file', () => {
            assert.file(['test/spec/decorators/none_decorator_test.js']);
        });
    });
});
