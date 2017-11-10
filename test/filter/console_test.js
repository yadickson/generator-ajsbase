'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:filter', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/filter'))
                .withArguments(['money'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should filter file contain name', () => {
            assert.fileContent('filters/money_filter.js', ".filter('money',");
        });

        it('should filter test file', () => {
            assert.file(['test/spec/filters/money_filter_test.js']);
        });

    });
});