/*
 * Title: Jokes Utility
 * Description: Utility library for getting a list of Jokes
 * Author: Leslie Lewis
 * Date: 10/24/17
 *
 */

 
// Dependencies
const fs = require('fs');

// App object
const jokes = {};

// Get all the jokes and return them to the user
jokes.allJokes = () => {

    // Read the text file containing the jokes
    const fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');

    // Turn the string into an array
    const arrayOfJokes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfJokes;
};

module.exports = jokes;
