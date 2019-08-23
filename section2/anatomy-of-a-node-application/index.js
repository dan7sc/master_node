
/*
 * Title: Basic Node Example
 * Description: Simple file that declares a few functions and invokes them.
 * Author: Leslie Lewis
 * Date: 10/24/17
 *
 */


// Dependencies
const mathlib = require('./lib/math');
const jokeslib = require('./lib/jokes');

// App object
const app = {};

// Configuration
app.config = {
    'timeBetweenJokes': 1000
};

// Function that prints a random joke
app.printAJoke = () => {

    // Get all the jokes
    const allJokes = jokeslib.allJokes();

    // Get the length of the jokes
    const numberOfJokes = allJokes.length;

    // Pick a random number between 1 and the number of jokes
    const randomNumber = mathlib.getRandomNumber(1,numberOfJokes);

    // Get the joke at that position in the array (minus one)
    const selectedJoke = allJokes[randomNumber - 1];

    // Send the joke to the console
    console.log(selectedJoke);
};

// Function that loops indefinitely, calling the printAJoke function as it goes
app.indefiniteLoop = () => {

    // Create the interval using the config variable defined above
    setInterval(app.printAJoke, app.config.timeBetweenJokes);
};

// Function that loops definitely, calling the printAJoke function as it goes
app.definiteLoop = () => {

    const stop = 6000;
    // Create the interval using the config variable defined above
    const intervalToStop = setInterval(app.printAJoke, app.config.timeBetweenJokes);
    setTimeout(
        () => clearTimeout(intervalToStop),
        stop
    );
};

// Invoke the loop
// app.indefiniteLoop();

// Invoke without loop
app.definiteLoop();
