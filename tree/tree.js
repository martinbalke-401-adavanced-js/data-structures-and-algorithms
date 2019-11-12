'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value){
    this.root = new Node(value);
    this.values = [];
  }

  preOrder(root) {
    this.values.push(root);
    if(root.left !== null) this.preOrder(root.left);
    if(root.right !== null) this.preOrder(root.right);
    console.log(this.values);
  }

  inOrder(root) {
    if(root.left !== null) this.inOrder(root.left);
    this.values.push(root);
    if(root.right !== null) this.inOrder(root.right);
    console.log(this.values);
  }

  postOrder(root) {
    if(root.left !== null) this.postOrder(root.left);
    if(root.right !== null) this.postOrder(root.right);
    this.values.push(root);
    console.log(this.values);
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(value){
    super(value);
  }
  add(root, value) {
    if(root.value < value && !root.right) return root.right = new Node(value);
    if(root.value > value && !root.left) return root.left = new Node(value);
    if(root.value < value) this.add(root.right, value);
    if(root.value > value) this.add(root.left, value);

  }
  contains(root, value){
    if(root.value === value) return true;
    if(root.value < value && root.right) this.contains(root.right, value);
    if(root.value > value && root.left) this.contains(root.left, value);
    return false;
  }
}

module.exports = BinarySearchTree;