'use strict';
const Tree = require('../../tree/tree');
const treeIntersection = require('../tree-intersection');
const tree1 = new Tree(1);
const tree2 = new Tree(2);

describe('Tree intersection testing', () => {
  it('No shared values', () => {
    let result = treeIntersection(tree1.root, tree2.root);
    expect(result.length).toBe(0);
  });
  it('Identical values', () => {
    tree1.add(tree1.root, 2);
    tree2.add(tree2.root, 1);
    let result = treeIntersection(tree1.root, tree2.root);
    console.log(result);
    expect(result.length).toBe(2);
  });
  it('Different Sizes', () => {
    tree1.add(tree1.root, 3);
    tree1.add(tree1.root, 4);
    tree1.add(tree1.root, 5);
    let result = treeIntersection(tree1.root, tree2.root);
    expect(result.length).toBe(2);

  });
  it('Incorrect parameters', () => {
    try {
      treeIntersection({}, []);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});