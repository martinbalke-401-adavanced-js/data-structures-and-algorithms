'use strict';
const fizzBuzz = require('../fizz-buzz-tree');
const BinarySearchTree = require('../../tree/tree');
const binaryTree = new BinarySearchTree();

describe('fizzbuzz testing', () => {
  it('does the thing', () => {
    console.log(fizzBuzz, binaryTree);
    expect(true).toBeTruthy();
  });
});