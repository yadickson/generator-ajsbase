'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:service', () => {
    describe('Check service info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/service'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should service file contain name', () => {
            assert.fileContent('services/numeric_service.js', ".service('numeric',");
        });

        it('should service test file', () => {
            assert.file(['test/spec/services/numeric_service_test.js']);
        });

    });
});