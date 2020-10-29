const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('different objects', () => {
  it('differentiate objects', () => {
    expect(obj1).toStrictEqual(obj2);
    expect(obj2).not.toStrictEqual(obj3);
    expect(obj3).not.toStrictEqual(obj1);
  });
});
