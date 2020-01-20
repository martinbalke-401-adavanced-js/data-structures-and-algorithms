'use strict';

const repeatedWord = require('../repeated-word');

describe('Repeated word tests', () => {
  it('String which contains only one word', () => {
    try {
      repeatedWord('Sam');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it('String where the repeated word happens immediately', () => {
    let test = repeatedWord('Sam sam hat');
    expect(test).toBe('sam');
  });
  it('String where there are no repeated words', () => {
    try {
      repeatedWord('Sam has a big hat');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it('Not a string', () => {
    try {
      repeatedWord(5);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it('Empty string', () => {
    try {
      repeatedWord('');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});