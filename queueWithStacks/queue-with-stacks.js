'use strict';


//Creating a class for the nodes 
class Node {
  constructor(value) {
    //Storing value and next pointer
    this.value = value;
    this.next = null;
  }
}

//Creating a class for stacks
class Stack {
  constructor() {
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
    return this.top = node;
  }
  //Check the top value
  peek() {
    return this.top;
  }

  //Method for taking off the top of the stack
  pop() {
    //If peeking returns a value of null throw an error
    if (!this.peek()) return console.error('No nodes in the stack');
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


class PsuedoQueue {
  constructor(){
    //Front and rear are both a new stack
    this.front = new Stack();
    this.rear = new Stack();
  }
  //Add a value to the front of the queue
  //LILO
  enqueue(val) {
    //Push on to the front of the queue
    return this.front.push(val);
  }

  //Remove a value from the rear of the queue
  //FIFO
  dequeue(){
    //While the front has a value pop it off and push it's value on to the rear
    while(this.front.peek()){
      this.rear.push(this.front.pop().value);
    }
    //Return the top node of the rear
    return this.rear.pop();

  }
}



module.exports = PsuedoQueue;