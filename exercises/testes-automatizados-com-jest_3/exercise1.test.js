const { randomNumber } = require('./exerciseFunctions');

jest.mock('./exerciseFunctions');

describe('randomNumber', () => {
  it('should return an default number', () => {
    randomNumber.mockImplementation(() => 10);
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  });
});