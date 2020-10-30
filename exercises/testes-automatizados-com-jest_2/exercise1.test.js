const uppercase = (str, callback) => {
	callback(str.toUpperCase());
};

describe('uppercase', () => {
	it('should uppercase trybe to TRYBE', () => {
    uppercase('trybe', (str) => {
      expect(str).toBe('TRYBE');
    })
  });

  it('it should stay TRYBE', () => {
    uppercase('TRYBE', (str) => {
      expect(str).toBe('TRYBE');
    });
  });
});
