'use strict'

const {
    readFileSync
} = require('fs');
const ini = require('ini');
const CustomError = require('./customError.js');

class Config {
    constructor() {
        this.locale = 'english';
        this.defaultLocation = 'New York City';
    }

    parseConfig(filePath) {
        let file, content;

        try {
            file = readFileSync(filePath, 'utf8');
        } catch (e) {
            throw new CustomError(e.message, 'config');
        }
        content = ini.parse(file);
        for (let section in content) {
            for (let entry in content[section]) {
                this[Config.snakeToCamel(entry)] = content[section][entry];
            }
        }
        this.locale = this.locale.toLowerCase();
        if (!(this.locale == 'english' || this.locale == 'french'))
            throw new CustomError(e.message, 'locale');
    }

    static snakeToCamel(string) {
        return (string.replace(/\_\w/g, function (snakePart) {
            return (snakePart[1].toUpperCase());
        }));
    }
}

module.exports = Config