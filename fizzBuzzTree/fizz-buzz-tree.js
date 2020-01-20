'use strict';

const BinarySearchTree = require('../tree/tree');
const binaryTree = new BinarySearchTree();


const fizzBuzzTree = (root) => {
  if(root.value % 15 === 0) root.value = 'FizzBuzz';
  if(root.value % 3 === 0) root.value = 'Fizz';
  if(root.value % 5 === 0) root.value = 'Buzz';

  if(root.left) fizzBuzzTree(root.left);
  if(root.right) fizzBuzzTree(root.right);
  return root;
};

console.log(binaryTree);

module.exports = fizzBuzzTree;