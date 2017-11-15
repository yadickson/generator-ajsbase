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

        this.argument('componentname', {
            type: String,
            required: true,
            desc: '[Component name]'
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

        this.modulename = camelize(pkg.getProjectName() || 'app') + 'Module';
        this.filepath = this.options.filepath;
        this.testpath = this.options.testpath;
        this.folder = '/components/';

        this.name = this.options.componentname || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.componentname = this.varname + "Component";
        this.htmlname = "data-" + decamelize(camelize(this.varname)).replace("_", "-");
        this.file = decamelize(camelize(this.componentname)) + '.js';
        this.filetest = decamelize(camelize(this.componentname)) + '_test.js';
    }

    prompting() {
        var text = 'Making the component ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingComponent();
        this._writingTest();
    }

    _writingComponent() {
        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath(this.filepath + this.folder + this.file), {
                varname: this.varname,
                name: this.componentname,
                htmlname: this.htmlname,
                modulename: this.modulename
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('component_test.js'),
            this.destinationPath(this.testpath + this.folder + this.filetest), {
                varname: this.varname,
                name: this.componentname,
                htmlname: this.htmlname,
                modulename: this.modulename
            }
        );
    }

};