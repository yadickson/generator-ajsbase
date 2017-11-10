'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:filter', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/filter'))
                .withArguments(['numeric', 'src', 'test'])
                .on('end', done);
        });

        it('creates src/filters/numeric_filter.js', () => {
            assert.file(['src/filters/numeric_filter.js']);
        });

        it('creates test/filters/numeric_filter_test.js', () => {
            assert.file(['test/filters/numeric_filter_test.js']);
        });
    });
});