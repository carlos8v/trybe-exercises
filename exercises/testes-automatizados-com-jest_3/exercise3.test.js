const service = require('./exerciseFunctions');

describe('randomNumber', () => {
  it('should return a multiplication between three numbers', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    
    expect(service.randomNumber(5, 5, 5)).toBe(125);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5, 5, 5);
  });

  it('should return a number argument times two', () => {
    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation((n) => n * 2);

    expect(service.randomNumber(7)).toBe(14);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(7);
  });
});