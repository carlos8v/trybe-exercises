const sum = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('parameters must be numbers');
	}

	return a + b;
};

describe('Sum', () => {
	it('should sum two numbers', () => {
		expect(sum(4, 5)).toBe(9);
		expect(sum(0, 0)).toBe(0);
		expect(() => sum(4, '5')).toThrow(Error);
	});
});
