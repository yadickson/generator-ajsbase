'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:value', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should value file contain name', () => {
            assert.fileContent('services/excel_value.js', ".value('excel',");
        });

        it('should value test file', () => {
            assert.file(['test/spec/services/excel_value_test.js']);
        });

    });
});