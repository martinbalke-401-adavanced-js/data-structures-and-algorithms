'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  preOrder() {
    let values = [];

    return values;
  }

  inOrder() {
    let values = [];

    return values;
  }

  postOrder() {
    let values = [];

    return values;
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(){
    super();
  }
  add(value) {
    let node = new Node(value);
    console.log(node);

  }
  contains(value){

  }
}

module.exports = BinarySearchTree;