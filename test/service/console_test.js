'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:service', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/service'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should service file contain name', () => {
            assert.fileContent('services/excel_service.js', ".service('excel',");
        });

        it('should service test file', () => {
            assert.file(['test/spec/services/excel_service_test.js']);
        });

    });
});