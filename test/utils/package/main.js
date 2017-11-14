'use strict';
const utils = require('../../../utils');
const expect = require('chai').expect;
const path = require('path');

describe('Check utils with package.json', () => {
    describe('Check package.json', () => {

        it('Check name', () => {
            expect(utils.getName(path.join(__dirname, 'package.json'))).to.be.equal('project');
        });

        it('Check version', () => {
            expect(utils.getVersion(path.join(__dirname, 'package.json'))).to.be.equal('1.0.0');
        });

        it('Check description', () => {
            expect(utils.getDescription(path.join(__dirname, 'package.json'))).to.be.equal('description project');
        });

        it('Check author', () => {
            expect(utils.getAuthor(path.join(__dirname, 'package.json'))).to.be.equal('author name');
        });

        it('Check email', () => {
            expect(utils.getEmail(path.join(__dirname, 'package.json'))).to.be.equal('mail@domain.com');
        });

        it('Check username', () => {
            expect(utils.getUsername(path.join(__dirname, 'package.json'))).to.be.equal('user');
        });

    });
});