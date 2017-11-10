'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:provider', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/provider'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should provider file contain name', () => {
            assert.fileContent('services/none_provider.js', ".provider('none',");
        });

        it('should provider test file', () => {
            assert.file(['test/spec/services/none_provider_test.js']);
        });

    });
});