'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:directive', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/directive'))
                .withArguments(['numeric', 'directiveModule', 'src', 'test'])
                .on('end', done);
        });

        it('should directive file contain modulename', () => {
            assert.fileContent('src/directives/numeric_directive.js', ".module('directiveModule')");
        });

        it('creates src/directives/numeric_directive.js', () => {
            assert.file(['src/directives/numeric_directive.js']);
        });

        it('creates test/directives/numeric_directive_test.js', () => {
            assert.file(['test/directives/numeric_directive_test.js']);
        });
    });
});