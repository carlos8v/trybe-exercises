const service = require('./exerciseFunctions');

describe('randomNumber', () => {
  it('should return an default number', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => {
      if (b === 0) return 'Second argument should not be 0';
      return a / b;
    });
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  });
});