'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');
const upperCase = require('upper-case')
const pkg = require('../../utils');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('constname', {
            type: String,
            required: true,
            desc: '[Constant name]'
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
        this.folder = '/services/';

        this.name = this.options.constname || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.const = this.varname + "Const";
        this.constname = upperCase(decamelize(camelize(this.const)));

        this.file = decamelize(camelize(this.const)) + '.js';
        this.filetest = decamelize(camelize(this.const)) + '_test.js';
    }

    prompting() {
        var text = 'Making the constant ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingConstant();
        this._writingTest();
    }

    _writingConstant() {
        this.fs.copyTpl(
            this.templatePath('constant.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.varname,
                name: this.constname,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('constant_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.varname,
                name: this.constname,
                modulename: this.modulename
            }
        );
    }
};
