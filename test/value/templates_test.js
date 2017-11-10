'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:value', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withArguments(['numeric', 'src', 'test'])
                .on('end', done);
        });

        it('creates src/services/numeric_value.js', () => {
            assert.file(['src/services/numeric_value.js']);
        });

        it('creates test/services/numeric_value_test.js', () => {
            assert.file(['test/services/numeric_value_test.js']);
        });
    });
});