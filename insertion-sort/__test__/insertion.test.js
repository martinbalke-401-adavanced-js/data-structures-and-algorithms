const insertionSort = require('../insertion');

describe( 'insertion sort tests', () => {
  it('Sort array length of k', () => {
    let array1 = insertionSort([ 3 ]);
    expect(array1).toEqual([3]);

    let array2 = insertionSort([3,2]);
    expect(array2).toEqual([2,3]);
   
    let array3 = insertionSort([0,9,8,7,6,5,4,3,2,1]);
    expect(array3).toEqual([0,1,2,3,4,5,6,7,8,9]);

  });
  it('Error when given not an array', () => {
    try {
      insertionSort({});
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it('Error when empty array', () => {
    try {
      insertionSort([]);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it('Error when one of the elements is not a number', () => {
    try {
      insertionSort([1,'a']);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});