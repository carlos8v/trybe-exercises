const service = require('./exerciseFunctions');

jest.mock('./exerciseFunctions');

describe('firstFunction', () => {
	test('should return a string in lowercase', () => {
		service.firstFunction.mockImplementation((a) => a.toLowerCase());

		expect(service.firstFunction('TESTE')).toBe('teste');
		expect(service.firstFunction).toHaveBeenCalled();
		expect(service.firstFunction).toHaveBeenCalledTimes(1);
		expect(service.firstFunction).toHaveBeenCalledWith('TESTE');
	});
});

describe('secondFunction', () => {
	test('should return the last letter of a word', () => {
		service.secondFunction.mockImplementation((a) => a.charAt(a.length - 1));

		expect(service.secondFunction('word')).toBe('d');
		expect(service.secondFunction).toHaveBeenCalled();
		expect(service.secondFunction).toHaveBeenCalledTimes(1);
		expect(service.secondFunction).toHaveBeenCalledWith('word');
	});
});

describe('thirdFunction', () => {
	test('should return three strings concat', () => {
		service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

		expect(service.thirdFunction('te', 's', 'te')).toBe('teste');
		expect(service.thirdFunction).toHaveBeenCalled();
		expect(service.thirdFunction).toHaveBeenCalledTimes(1);
		expect(service.thirdFunction).toHaveBeenCalledWith('te', 's', 'te');
	});
});