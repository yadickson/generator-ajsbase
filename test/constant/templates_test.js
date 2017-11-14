'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:constant', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/constant'))
                .withArguments(['numeric', 'constantModule', 'src', 'test'])
                .on('end', done);
        });

        it('should constant file contain modulename', () => {
            assert.fileContent('src/services/numeric_const.js', ".module('constantModule')");
        });

        it('creates src/services/numeric_const.js', () => {
            assert.file(['src/services/numeric_const.js']);
        });

        it('creates test/services/numeric_const_test.js', () => {
            assert.file(['test/services/numeric_const_test.js']);
        });
    });
});
