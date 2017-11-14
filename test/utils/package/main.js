'use strict';
const utils = require('../../../utils');
const expect = require('chai').expect;
const path = require('path');

describe('Check utils with package.json', () => {
    describe('Check package.json', () => {

        it('Check name', () => {
            expect(utils.getName(path.join(__dirname, './package.json'))).to.be.equal('appProjectModule');
        });

    });
});