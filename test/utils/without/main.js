'use strict';
const utils = require('../../../utils');
const expect = require('chai').expect;
const path = require('path');

describe('Check utils without package.json', () => {
    describe('Check package.json', () => {

        it('Check name', () => {
            expect(utils.getName(path.join(__dirname, 'package.json'))).to.be.equal('appModule');
        });

        it('Check version', () => {
            expect(utils.getVersion(path.join(__dirname, 'package.json'))).to.be.equal('0.0.0');
        });

        it('Check description', () => {
            expect(utils.getDescription(path.join(__dirname, 'package.json'))).to.be.equal('');
        });

        it('Check author', () => {
            expect(utils.getAuthor(path.join(__dirname, 'package.json'))).to.be.equal('');
        });

        it('Check email', () => {
            expect(utils.getEmail(path.join(__dirname, 'package.json'))).to.be.equal('');
        });

        it('Check username', () => {
            expect(utils.getUsername(path.join(__dirname, 'package.json'))).to.be.equal('');
        });

    });
});