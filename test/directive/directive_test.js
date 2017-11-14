'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:directive', () => {
    describe('Check directive info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/directive'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should directive file contain modulename', () => {
            assert.fileContent('directives/numeric_directive.js', ".module('appModule')");
        });

        it('should directive file contain name', () => {
            assert.fileContent('directives/numeric_directive.js', ".directive('numeric',");
        });

        it('should directive test file', () => {
            assert.file(['test/spec/directives/numeric_directive_test.js']);
        });
    });

});