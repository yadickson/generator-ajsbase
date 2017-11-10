'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:directive', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/directive'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should directive file contain name', () => {
            assert.fileContent('directives/none_directive.js', ".directive('none',");
        });

        it('should directive test file', () => {
            assert.file(['test/spec/directives/none_directive_test.js']);
        });
    });
});
