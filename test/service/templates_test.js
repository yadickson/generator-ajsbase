'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:service', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/service'))
                .withArguments(['numeric', 'src', 'test'])
                .on('end', done);
        });

        it('creates src/services/numeric_service.js', () => {
            assert.file(['src/services/numeric_service.js']);
        });

        it('creates test/services/numeric_service_test.js', () => {
            assert.file(['test/services/numeric_service_test.js']);
        });
    });
});