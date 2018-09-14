'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 //* My code
function keepFirst (str) {
    return str.slice(0, 2);
};
function keepLast (str) {
    return str.slice(-2);
};
function keepFirstLast (str) {
    return str.slice(0, 2) + str.slice(-2);
};

//* Begin of tests
const assert = require('assert')

// End of tests */
