'use strict';
//Class for the Nodes on the tree
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Binary tree class
class BinaryTree {
  constructor(value){
    this.root = new Node(value);
    this.values = [];
  }

  //Preorder prints root<-left<-right
  preOrder(root) {
    //Values array used to keep track of the values pushes root first
    this.values.push(root);
    //Traverse the left side and then the right 
    if(root.left !== null) this.preOrder(root.left);
    if(root.right !== null) this.preOrder(root.right);
    console.log(this.values);
  }
  //Inorder prints left<-root<-right
  inOrder(root) {
    if(root.left !== null) this.inOrder(root.left);
    this.values.push(root);
    if(root.right !== null) this.inOrder(root.right);
    console.log(this.values);
  }
  //Postorder prints left<-right<-root
  postOrder(root) {
    if(root.left !== null) this.postOrder(root.left);
    if(root.right !== null) this.postOrder(root.right);
    this.values.push(root);
    console.log(this.values);
  }
}
//Binary search tree class for doing searches and adds
class BinarySearchTree extends BinaryTree{
  constructor(value){
    super(value);
  }
  //Add traverses the tree and adds a node based on if it's value
  //is greater or less than it's parent node allowing for log n searches
  add(root, value) {
    //If the value should be on the right or left and there is no corresponding node add it there
    if(root.value < value && !root.right) return root.right = new Node(value);
    if(root.value > value && !root.left) return root.left = new Node(value);
    //Else keep calling the function traversing based on comparison operator
    if(root.value < value) this.add(root.right, value);
    if(root.value > value) this.add(root.left, value);

  }
  //Contains checks the tree for a value and returns a Boolean
  contains(root, value){
    //If there is a match return true
    if(root.value === value) return true;
    //Otherwise search for the value using comparison operators and recursion
    if(root.value < value && root.right) this.contains(root.right, value);
    if(root.value > value && root.left) this.contains(root.left, value);
    return false;
  }
}

module.exports = BinarySearchTree;