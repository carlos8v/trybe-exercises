const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, 'Object 1 is different from object 2');
assert.deepStrictEqual(obj2, obj3, 'Object 2 is different from object 3');
assert.deepStrictEqual(obj3, obj1, 'Object 3 is different from object 1');
