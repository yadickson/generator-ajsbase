'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');
const pkg = require('package-json-utils');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('directivename', {
            type: String,
            required: true,
            desc: '[Directive name]'
        });

        this.argument('filepath', {
            type: String,
            required: false,
            default: '.',
            desc: '[Script path]'
        });

        this.argument('testpath', {
            type: String,
            required: false,
            default: 'test/spec',
            desc: '[Test path]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.modulename = pkg.getModuleName();
        this.filepath = this.options.filepath;
        this.testpath = this.options.testpath;
        this.folder = '/directives/';

        this.name = this.options.directivename || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.directivename = this.varname + 'Directive';
        this.htmlname = "data-" + decamelize(camelize(this.varname)).replace("_", "-");
        this.file = decamelize(camelize(this.directivename)) + '.js';
        this.filetest = decamelize(camelize(this.directivename)) + '_test.js';
    }

    prompting() {
        var text = 'Making the directive ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingDirective();
        this._writingTest();
    }

    _writingDirective() {
        this.fs.copyTpl(
            this.templatePath('directive.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.varname,
                name: this.directivename,
                htmlname: this.htmlname,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('directive_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.varname,
                name: this.directivename,
                htmlname: this.htmlname,
                modulename: this.modulename
            }
        );
    }
};