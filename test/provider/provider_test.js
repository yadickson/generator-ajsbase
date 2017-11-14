'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:provider', () => {
    describe('Check provider info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/provider'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should provider file contain modulename', () => {
            assert.fileContent('services/numeric_provider.js', ".module('appModule')");
        });

        it('should provider file contain name', () => {
            assert.fileContent('services/numeric_provider.js', ".provider('numeric',");
        });

        it('should provider test file', () => {
            assert.file(['test/spec/services/numeric_provider_test.js']);
        });

    });
});