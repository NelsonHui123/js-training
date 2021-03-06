'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//*My code
function cutFirst(str) {
    return str.slice(2);
};
function cutLast(str) {
    return str.slice(0, str.length-2);
};
function cutFirstLast(str) {
    var temp = str.slice(0, str.length-2);
    return temp.slice(2);
};

//* Begin of tests
const assert = require('assert')
const str = "abcdefghijk"
assert.strictEqual(cutFirst(str), "cdefghijk")
assert.strictEqual(cutLast(str), "abcdefghi")
assert.strictEqual(cutFirstLast(str), "cdefghi")
// End of tests */
