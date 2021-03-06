'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:filter', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/filter'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should filter file contain name', () => {
            assert.fileContent('filters/none_filter.js', ".filter('none',");
        });

        it('should filter test file', () => {
            assert.file(['test/spec/filters/none_filter_test.js']);
        });

    });
});