'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');
const pkg = require('../../utils');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('filtername', {
            type: String,
            required: true,
            desc: '[Filter name]'
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

        this.modulename = pkg.getName();
        this.filepath = this.options.filepath;
        this.testpath = this.options.testpath;
        this.folder = '/filters/';

        this.name = this.options.filtername || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.filtername = this.varname + 'Filter';
        this.file = decamelize(camelize(this.filtername)) + '.js';
        this.filetest = decamelize(camelize(this.filtername)) + '_test.js';
    }

    prompting() {
        var text = 'Making the filter ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingFilter();
        this._writingTest();
    }

    _writingFilter() {
        this.fs.copyTpl(
            this.templatePath('filter.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.varname,
                name: this.filtername,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('filter_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.varname,
                name: this.filtername,
                modulename: this.modulename
            }
        );
    }
};