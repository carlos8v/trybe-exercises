const myRemoveWithoutCopy = (arr, item) => {
  const oldArr = arr;
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  if (oldArr.includes(item)) {
    expect(arr).toStrictEqual([1, 2, 3, 4]);
  }
  return arr;
}

describe('myRemoveWithoutCopy', () => {
  it('remove item from array without copy', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
})
