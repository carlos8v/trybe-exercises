const assert = require('assert');

const addAllnumbers = (arr) => arr.reduce((acc, curr) => acc + curr);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);