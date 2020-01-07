'use strict';
const quickSort = require('../quick-sort');

describe('quick sort testing', () => {
  it('Works on array size 1', () => {
    let result = quickSort([1]);
    expect(result).toEqual([1]);
  });

  it('Works on small array', () => {
    let result = quickSort([3,4,1]);
    expect(result).toEqual([1,3,4]);
  });

  it('Works on large array', () => {
    let result = quickSort([3, 4, 1, 5, 4, 9, 18, 0, 2]);
    expect(result).toEqual([0, 1, 2, 3, 4, 4, 5 ,9,18]);
  });

  it('Throws an error when given an input other than an array', () => {
    try {
      quickSort({});
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('Throws an error when given an input other than numbers', () => {
    try {
      quickSort(['1', '2']);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

});