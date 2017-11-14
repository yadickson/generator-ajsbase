'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');
const utils = require('../../utils');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('providername', {
            type: String,
            required: true,
            desc: '[Provider name]'
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

        this.modulename = utils.getName();
        this.filepath = this.options.filepath;
        this.testpath = this.options.testpath;
        this.folder = '/services/';

        this.name = this.options.providername || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.providername = this.varname + 'Provider';
        this.file = decamelize(camelize(this.providername)) + '.js';
        this.filetest = decamelize(camelize(this.providername)) + '_test.js';
    }

    prompting() {
        var text = 'Making the provider ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingProvider();
        this._writingTest();
    }

    _writingProvider() {
        this.fs.copyTpl(
            this.templatePath('provider.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.varname,
                name: this.providername,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('provider_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.varname,
                name: this.providername,
                modulename: this.modulename
            }
        );
    }
};