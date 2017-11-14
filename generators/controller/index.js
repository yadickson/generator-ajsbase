'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const uppercamelcase = require('uppercamelcase');
const decamelize = require('decamelize');
const utils = require('../../utils');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('ctrlname', {
            type: String,
            required: true,
            desc: '[Controller name]'
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
        this.folder = '/controllers/';

        this.name = this.options.ctrlname || 'none';
        this.console = !this.options.disableConsole;

        this.ctrlname = uppercamelcase(this.name) + 'Ctrl';
        this.file = decamelize(this.ctrlname) + '.js';
        this.filetest = decamelize(this.ctrlname) + '_test.js';
    }

    prompting() {
        var text = 'Making the controller ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingController();
        this._writingTest();
    }

    _writingController() {
        this.fs.copyTpl(
            this.templatePath('controller.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.ctrlname,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('controller_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.ctrlname,
                modulename: this.modulename
            }
        );
    }
};