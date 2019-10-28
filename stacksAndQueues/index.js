'use strict';


//Creating a class for the nodes 
class Node {
  constructor(value){
    //Storing value and next pointer
    this.value = value;
    this.next = null;
  }
}

//Creating a class for stacks
class Stack {
  constructor(){
    //Storing the top as part of the stack
    this.top = null;
  }
  //Method for adding on to the top of the stack
  push(val) {
    const node = new Node(val);
    //If there is no top node make this the top without setting next
    if (!this.top) return this.top = node;
    //Otherwise set the next as well
    node.next = this.top;
    this.top = node;
  }
  //Check the top value
  peek() {
    return this.top;
  }

  //Method for taking off the top of the stack
  pop() {
    //If peeking returns a value of null throw an error
    if(!this.peek()) return console.error('No nodes in the stack');
    //Declaring a temp variable to reference the top node
    let temp = this.top;
    //Moving the top down one node
    this.top = this.top.next;
    //Removing the top's next variable
    temp.next = null;
    //Returning the removed node
    return temp;
  }

}

//Class for the Queue data structure
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  //Add a node to the rear of the queue
  enqueue(value) {
    let node = new Node(value);
    //If there is no front node this node will be the front and the rear
    if(!this.front) return this.front = node, this.rear = node;
    //Otherwise this node will become the rear and have its next be the previous rear
    node.next = this.rear;
    this.rear = node;
  }

  dequeue() {
    //If peek determines the que is empty return an error
    if(!this.peek()) return console.error('Queue is empty');
    //Declare a temp variable to reference the front
    let temp = this.front;
    //Change the front to the the front's next node
    this.front = this.front.next;
    temp.next = null;
    return temp;
  }
  //Look at the front of the queue
  peek() {
    return this.front;
  }

}

module.exports = {Queue, Stack};