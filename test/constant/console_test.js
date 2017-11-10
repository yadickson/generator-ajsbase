'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:constant', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/constant'))
                .withArguments(['url-app'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should constant file contain name', () => {
            assert.fileContent('services/url_app_const.js', ".constant('urlApp',");
        });

        it('should constant test file', () => {
            assert.file(['test/spec/services/url_app_const_test.js']);
        });

    });
});