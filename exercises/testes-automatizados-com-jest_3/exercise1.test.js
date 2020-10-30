const service = require('./exerciseFunctions');

describe('randomNumber', () => {
  it('should return an default number', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  });
});