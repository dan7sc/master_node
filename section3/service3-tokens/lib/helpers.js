/*
 * Helpers for various tasks
 *
 */

// Dependencies
const config = require('../config');
const crypto = require('crypto');

// Container for all the helpers
const helpers = {};

// Parse a JSON string for an object in all cases, without throwing
helpers.parseJsonToObject = (str) => {
    try {
        const obj = JSON.parse(str);
        return obj;
    } catch(e) {
        return {};
    }
};

// Create a SHA256 hash
helpers.hash = (str) => {
    if (typeof(str) === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', config.hashingSecret)
            .update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
};

// Create a string of random alphanumeric characters, of a given length
helpers.createRandomString = (strLength) => {
    strLength = typeof(strLength) === 'number' && strLength > 0 ?
        strLength : false;
    if (strLength) {
        // Define all possible characters that could go into a string
        const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        // Start the final string
        let str ='';
        for (let i = 1; i <= strLength; i++) {
            // Get a random character from the possibleCharacters string
            const randomCharacter = possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            ); 
            str += randomCharacter;
        }
        // Return the final string
        return str;
    } else {
        return false;
    }
};

// Export module
module.exports = helpers;
