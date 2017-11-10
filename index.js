'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

    prompting() {
        this.log(yosay('Base ' + chalk.blue('AngularJS') + ' generator!'));
    }

};
