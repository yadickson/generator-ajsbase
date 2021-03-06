'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:value', () => {
    describe('Check value info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should value file contain modulename', () => {
            assert.fileContent('services/numeric_value.js', ".module('appModule')");
        });

        it('should value file contain name', () => {
            assert.fileContent('services/numeric_value.js', ".value('numeric',");
        });

        it('should value test file', () => {
            assert.file(['test/spec/services/numeric_value_test.js']);
        });

    });
});