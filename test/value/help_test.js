'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:value', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should value file contain name', () => {
            assert.fileContent('services/none_value.js', ".value('none',");
        });

        it('should value test file', () => {
            assert.file(['test/spec/services/none_value_test.js']);
        });

    });
});