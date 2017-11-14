'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:controller', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/controller'))
                .withArguments(['calculator', 'controllerModule', 'src', 'test'])
                .on('end', done);
        });

        it('should controller file contain modulename', () => {
            assert.fileContent('src/controllers/calculator_ctrl.js', ".module('controllerModule')");
        });

        it('creates src/controllers/calculator_ctrl.js', () => {
            assert.file(['src/controllers/calculator_ctrl.js']);
        });

        it('creates test/controllers/calculator_ctrl_test.js', () => {
            assert.file(['test/controllers/calculator_ctrl_test.js']);
        });

    });
});