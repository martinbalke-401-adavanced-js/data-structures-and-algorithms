'use strict';
const binarySearch = require('../index');

let arr = [1, 2, 3, 4, 5];

describe('Binary search tests', () => {

  
  it('Returns -1 if key is not found', () => {
    let key = 6;
    expect(binarySearch(arr, key)).toBe(-1);
  });
  
  it('Returns index if the key matches', () => {
    let key = 3;
    expect(binarySearch(arr, key)).toBe(2);
    key = 1;
    expect(binarySearch(arr, key)).toBe(0);
  });
});