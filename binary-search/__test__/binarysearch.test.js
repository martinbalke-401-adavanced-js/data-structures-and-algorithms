'use strict';
const binarySearch = require('../index');

describe('Binary search tests', () => {
  let arr = [1, 2, 3, 4, 5];
  let key;
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  
  it('Returns -1 if key is not found', () => {
    key = 6;
    expect(binarySearch(mid,left,right)).toBe(-1);
  });
  
  it('Returns index if the key matches', () => {
    key = 3;
    expect(binarySearch(mid,left,right)).toBe(2);
    key = 1;
    expect(binarySearch(mid, left, right)).toBe(1);
  });
});