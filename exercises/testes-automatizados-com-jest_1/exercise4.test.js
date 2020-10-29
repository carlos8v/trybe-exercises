const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('myFizzBuzz', () => {
  it('get fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('5')).toBe(false);
  });
});
