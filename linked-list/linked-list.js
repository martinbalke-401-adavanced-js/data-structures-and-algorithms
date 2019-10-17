'use strict';

class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  
  insert(value){
    let newNode = new Node(value);
    if(this.head)newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  includes(val){
    let current = this.head;
    while(current.next !== null){
      if(current.data === val) return true;
      current = current.next;
    }
    return current.data === val;
  }

  toString(){
    let string = '';
    let current = this.head;
    while (current.next !== null) {
      string += current.data.toString();
      current = current.next;
    }
    return string += current.data.toString();
  }
}

module.exports = LinkedList;