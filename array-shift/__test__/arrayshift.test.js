'use strict';

const shiftArray = require('../index');


describe('Array shift tests', () => {

  it('Correctly shifts an item in to the middle of an array', () => {

    expect(shiftArray([2, 4, 6, 8], 5)).toEqual([2,4,5,6,8]);
    expect(shiftArray([9, 8, 3, 5, 6, 7, 8], 32)).toEqual([9, 8, 3, 5, 32, 6, 7, 8]);
  });


}); 