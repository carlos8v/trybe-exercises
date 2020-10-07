const assert = require('assert');

const wordLengths = (arr) => {
    const lengthsArr = [];
    arr.map(item => {
        lengthsArr.push(item.length);
    })
    return lengthsArr;
    
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);