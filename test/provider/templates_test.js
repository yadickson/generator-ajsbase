'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:provider', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/provider'))
                .withArguments(['numeric', 'src', 'test'])
                .on('end', done);
        });

        it('creates src/services/numeric_provider.js', () => {
            assert.file(['src/services/numeric_provider.js']);
        });

        it('creates test/services/numeric_provider_test.js', () => {
            assert.file(['test/services/numeric_provider_test.js']);
        });
    });
});