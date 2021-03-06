'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:factory', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/factory'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should factory file contain name', () => {
            assert.fileContent('services/none_factory.js', ".factory('noneFactory',");
        });

        it('should factory test file', () => {
            assert.file(['test/spec/services/none_factory_test.js']);
        });

    });
});
