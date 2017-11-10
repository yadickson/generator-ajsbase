'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:constant', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/constant'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should constant file contain name', () => {
            assert.fileContent('services/none_const.js', ".constant('none',");
        });

        it('should constant test file', () => {
            assert.file(['test/spec/services/none_const_test.js']);
        });
    });
});