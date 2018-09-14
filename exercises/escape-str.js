'use strict'

/*
 * Create a constant variable named `escapeStr` that contains
 * the following specials characters: /\`"'
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :
const escapeStr = String.fromCharCode(47) + String.fromCharCode(92) + String.fromCharCode(96) + String.fromCharCode(34) + String.fromCharCode(39)

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof escapeStr, 'string')
assert.strictEqual(escapeStr.includes("'"), true)
assert.strictEqual(escapeStr.includes('"'), true)
assert.strictEqual(escapeStr.includes('`'), true)
assert.strictEqual(escapeStr.includes('/'), true)
assert.strictEqual(escapeStr.includes('\\'), true)
// End of tests */
