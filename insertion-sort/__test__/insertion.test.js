const insertionSort = require('../insertion');

describe( 'insertion sort tests', () => {
  it('Sort array length of k', () => {
    let array1 = insertionSort([ 3 ]);
    expect(array1).toBe([3]);

    let array2 = insertionSort([3,2]);
    expect(array2).toBe([2,3]);
   
    let array3 = insertionSort([0,9,8,7,6,5,4,3,2,1]);
    expect(array3).toBe([0,1,2,3,4,5,6,7,8,9]);

  });
  it('', () => {

  });
  it('', () => {

  });
  it('', () => {

  });
});