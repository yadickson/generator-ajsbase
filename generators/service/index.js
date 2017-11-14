'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');
const pkg = require('package-json-io');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('servicename', {
            type: String,
            required: true,
            desc: '[Service name]'
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

        this.module = pkg.name || 'app';
        this.modulename = decamelize(camelize(this.module)) + 'Module';
        this.filepath = this.options.filepath;
        this.testpath = this.options.testpath;
        this.folder = '/services/';

        this.name = this.options.servicename || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.servicename = this.varname + 'Service';
        this.file = decamelize(camelize(this.servicename)) + '.js';
        this.filetest = decamelize(camelize(this.servicename)) + '_test.js';
    }

    prompting() {
        var text = 'Making the service ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingService();
        this._writingTest();
    }

    _writingService() {
        this.fs.copyTpl(
            this.templatePath('service.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.varname,
                name: this.servicename,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('service_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.varname,
                name: this.servicename,
                modulename: this.modulename
            }
        );
    }
};