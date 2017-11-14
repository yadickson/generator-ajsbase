'use strict';
const utils = require('../../../utils');
const expect = require('chai').expect;

describe('Check utils without package.json', () => {
    describe('Check package.json', () => {

        it('Check name', () => {
            expect(utils.getName()).to.be.equal('appModule');
        });

    });
});