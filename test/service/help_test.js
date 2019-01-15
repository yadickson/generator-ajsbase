'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:service', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/service'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should service file contain name', () => {
            assert.fileContent('services/none_service.js', ".service('noneService',");
        });

        it('should service test file', () => {
            assert.file(['test/spec/services/none_service_test.js']);
        });

    });
});
