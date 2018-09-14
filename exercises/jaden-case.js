'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

//* My code
function jadenCase (str) {
    var strTemp = str.split(" ");
    var strResult = [];
    for (let i = 0; i < strTemp.length; i++) {
        strResult.push(strTemp[i].charAt(0).toUpperCase() + strTemp[i].slice(1).toLowerCase());
    }
    return strResult.join(" ");
};

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("abc def"), "Abc Def")
// End of tests */
