'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

//* My code
function whisper(str) {
    return "*" + str.slice().toLowerCase() + "*";
};

//* Begin of tests
const assert = require('assert')
assert.strictEqual(whisper("ABCDEF"), "*abcdef*")
// End of tests */
