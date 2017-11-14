'use strict'

const fs = require('file-system');

function getPackageJson(path) {

    path = path || './packages.json';
    var data = {};

    if (fs.existsSync(path) && fs.statSync(path).isFile()) {
        data = JSON.parse(fs.readFileSync(path).toString());
    }

    return data;
}

function getName(path) {
    return getPackageJson(path).name || 'appModule';
}

function getVersion(path) {
    return getPackageJson(path).version || '0.0.0';
}

function getDescription(path) {
    return getPackageJson(path).description || '';
}

function getAuthor(path) {
	var author = getPackageJson(path).author || {};
    return author.name || '';
}

function getEmail(path) {
	var author = getPackageJson(path).author || {};
    return author.email || '';
}

function getUsername(path) {
	var author = getPackageJson(path).author || {};
    var user = author.url || '';
    return user.substr(user.lastIndexOf('/') + 1);
}

module.exports = {
    getPackageJson: getPackageJson,
    getName: getName,
    getVersion: getVersion,
    getDescription: getDescription,
    getAuthor: getAuthor,
    getEmail: getEmail,
    getUsername: getUsername
};