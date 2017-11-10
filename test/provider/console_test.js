'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:provider', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/provider'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should provider file contain name', () => {
            assert.fileContent('services/excel_provider.js', ".provider('excel',");
        });

        it('should provider test file', () => {
            assert.file(['test/spec/services/excel_provider_test.js']);
        });

    });
});