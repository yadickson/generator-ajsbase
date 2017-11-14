'use strict'

const fs = require('file-system');
const camelize = require('camelize');

function getFile(filename) {

    var json = {};

    if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
        var buffer = fs.readFileSync(filename);
        json = JSON.parse(buffer.toString());
    }

    return json;
}

function getName(filename) {

    if (!filename) {
        filename = './package.json';
    }

    return camelize(getFile(filename).name || 'app') + 'Module';
}

module.exports = {
    getName: getName
};