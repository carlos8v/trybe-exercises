const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  expect(arr).toStrictEqual([1, 2, 3, 4]);
  return newArr;
}

describe('myRemove', () => {
  it('remove item from array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});
