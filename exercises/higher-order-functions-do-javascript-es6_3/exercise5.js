const assert = require('assert');

const names = [
	'Aanemarie',
	'Adervandes',
	'Akifusa',
	'Abegildo',
	'Adicellia',
	'Aladonata',
	'Abeladerco',
	'Adieidy',
	'Alarucha',
];

function containsA() {
	return names.reduce((acumulator, current) => {
    return acumulator + current.split('').reduce((acc, curr) => {
      if (curr.toLowerCase() === 'a') return acc + 1;
      return acc;
    }, 0)
  }, 0)
}

assert.deepEqual(containsA(), 20);
