const service = require('./exerciseFunctions');

describe('firstFunction', () => {
	test('should mock the first function and then restore the original behavior', () => {

    const mockFirstFunction = jest.spyOn(service, 'firstFunction')
      .mockImplementation((a) => a.toLowerCase());

		expect(mockFirstFunction('TESTE')).toBe('teste');
		expect(mockFirstFunction).toHaveBeenCalled();
		expect(mockFirstFunction).toHaveBeenCalledTimes(1);
    expect(mockFirstFunction).toHaveBeenCalledWith('TESTE');
    
    service.firstFunction.mockRestore();

    expect(service.firstFunction("teste")).toBe("TESTE");

	});
});