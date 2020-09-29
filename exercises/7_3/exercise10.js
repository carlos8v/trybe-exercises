const assert = require('assert');

const greetPeople = (people) => {
  let greetingArray = [];

  for (const person in people) {
      greetingArray.push(`Hello ${people[person]}`);
  }

  return greetingArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);