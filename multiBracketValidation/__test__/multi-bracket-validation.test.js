'use strict';
const mbv = require('../multi-bracket-validation');

describe('MBV testing', () => {
  it('passes all the tests', () => {
    expect(mbv('{}')).toBeTruthy();
    expect(mbv('{}(){}')).toBeTruthy();
    expect(mbv('()[[Extra Characters]]')).toBeTruthy();
    expect(mbv('(){}[[]]')).toBeTruthy();
    expect(mbv('{}{Code}[Fellows](())')).toBeTruthy();
    expect(mbv('[({}]')).toBeFalsy();
    expect(mbv('([(')).toBeFalsy();
    expect(mbv('{(}')).toBeFalsy();
  });
});