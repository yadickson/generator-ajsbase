'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('factoryname', {
            type: String,
            required: true,
            desc: '[Factory name]'
        });

        this.argument('modulename', {
            type: String,
            required: false,
            default: 'appModule',
            desc: '[Module name]'
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

        this.modulename = this.options.modulename;
        this.filepath = this.options.filepath;
        this.testpath = this.options.testpath;
        this.folder = '/services/';

        this.name = this.options.factoryname || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name)
        this.factoryname = this.varname + 'Factory';
        this.file = decamelize(camelize(this.factoryname)) + '.js';
        this.filetest = decamelize(camelize(this.factoryname)) + '_test.js';
    }

    prompting() {
        var text = 'Making the factory ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingFactory();
        this._writingTest();
    }

    _writingFactory() {
        this.fs.copyTpl(
            this.templatePath('factory.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.varname,
                name: this.factoryname,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('factory_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.varname,
                name: this.factoryname,
                modulename: this.modulename
            }
        );
    }
};