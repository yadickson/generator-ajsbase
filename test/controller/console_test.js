'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:controller', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/controller'))
                .withArguments(['register'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should controller file contain name', () => {
            assert.fileContent('controllers/register_ctrl.js', ".controller('RegisterCtrl',");
        });

        it('should controller test file', () => {
            assert.file(['test/spec/controllers/register_ctrl_test.js']);
        });

    });
});