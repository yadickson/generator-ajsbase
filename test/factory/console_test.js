'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:factory', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/factory'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should factory file contain name', () => {
            assert.fileContent('services/excel_factory.js', ".factory('excelFactory',");
        });

        it('should factory test file', () => {
            assert.file(['test/spec/services/excel_factory_test.js']);
        });

    });
});
