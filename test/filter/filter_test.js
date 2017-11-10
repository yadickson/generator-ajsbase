'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:filter', () => {
    describe('Check filter info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/filter'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should filter file contain name', () => {
            assert.fileContent('filters/numeric_filter.js', ".filter('numeric',");
        });

        it('should filter test file', () => {
            assert.file(['test/spec/filters/numeric_filter_test.js']);
        });

    });

});