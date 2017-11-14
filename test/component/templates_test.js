'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsbase:component', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/component'))
                .withArguments(['numeric', 'componentModule', 'src', 'test'])
                .on('end', done);
        });

        it('should component file contain modulename', () => {
            assert.fileContent('src/components/numeric_component.js', ".module('componentModule')");
        });

        it('creates src/components/numeric_component.js', () => {
            assert.file(['src/components/numeric_component.js']);
        });

        it('creates test/components/numeric_component_test.js', () => {
            assert.file(['test/components/numeric_component_test.js']);
        });
    });
});
