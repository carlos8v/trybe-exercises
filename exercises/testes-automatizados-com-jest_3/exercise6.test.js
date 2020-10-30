let { fetchDog } = require('./exerciseFunctions');

describe('fetchDog', () => {
  fetchDog = jest.fn();
  it('it should return success', () => {
    fetchDog.mockResolvedValue('request success');

    expect(fetchDog()).resolves.toBe('request success');
  });

  it('it shouls return an error', () => {
    fetchDog.mockRejectedValue('request failed');

    expect(fetchDog()).rejects.toBe('request failed');
  });
});