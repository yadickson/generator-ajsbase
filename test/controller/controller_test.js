'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:controller', () => {
    describe('Check controller info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/controller'))
                .withArguments(['calculator'])
                .on('end', done);
        });

        it('should controller file contain modulename', () => {
            assert.fileContent('controllers/calculator_ctrl.js', ".module('appModule')");
        });

        it('should controller file contain name', () => {
            assert.fileContent('controllers/calculator_ctrl.js', ".controller('CalculatorCtrl',");
        });

        it('should controller test file', () => {
            assert.file(['test/spec/controllers/calculator_ctrl_test.js']);
        });

    });
});