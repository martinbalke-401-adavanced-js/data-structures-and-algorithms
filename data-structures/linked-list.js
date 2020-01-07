'use strict';
//Creating a class for the individual nodes
class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

//instantiating the linkedlist class
class LinkedList{
  constructor(){
    this.head = null;
  }
  //insert a node at the beigining of the list
  insert(value){
    let newNode = new Node(value);
    //Check to see if there is already a head 
    //If there is change the new node's next to be head before making it the new head
    if(this.head)newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  includes(val){
    //Set up a variable to keep track of the current node we're on
    let current = this.head;
    //While there is a next node
    while(current.next !== null){
      //Check the current node to see if it is a match
      //If not cycle to the next node
      if(current.data === val) return true;
      current = current.next;
    }
    //Return for the last node in the list
    return current.data === val;
  }
  //Print the linked list as a simple string
  toString(){
    let string = '';
    //Set a variable to keep track of the current node
    let current = this.head;
    //While there is a next node
    while (current.next !== null) {
      //Add this nodes data to the string
      string += current.data.toString();
      current = current.next;
    }
    //Add the last nodes data to the string
    return string += current.data.toString();
  }
  //Add a node to the end of the list
  append(val){
    let newNode = new Node(val);
    //If there is no head node this will make a head
    if(!this.head) return this.head = newNode;
    let current = this.head;
    //Iterate over the linked list until the end
    while(current.next !== null){
      current = current.next;
    }
    //Set the next of the last node as this new node
    return current.next = newNode;
  }
  
  //Insert a node before a prexisting value
  insertBefore(val, newVal){
    let newNode = new Node(newVal);
    //Variables to keep track of the current node as well as the previous node
    let current = this.head;
    let previous;

    //Check to see if the head matches the val and insert if it does
    if(current.data === val) return this.insert(newVal);

      
    //Iterate over the linked list looking for the value
    while(current.next !== null){
      if(current.data === val){
        previous.next = newNode;
        return newNode.next = current;
      }
      //If the value is not found set the previous node to this node and current to the next
      previous = current;
      current = current.next;
    }
    //Checking the last node in the list for the value
    if (current.data === val) {
      previous.next = newNode;
      return newNode.next = current;
    }
  }
  //Insert a node after a found value
  insertAfter(val, newVal){
    let newNode = new Node(newVal);
    //Keeping track of the current node and the node that follows it
    let current = this.head;
    let following = current.next;
    while(current.next !== null){
      if(current.data === val){
        //If the data is match the current node's next is the new node
        //The new node's next is the node that would have come after current
        current.next = newNode;
        return newNode.next = following;
      }
      current = current.next;
      following = following.next;
    }
    //Checking the last node
    if (current.data === val) {
      current.next = newNode;
      return newNode.next = null;
    }
  }

  kthFromEnd(k) {
    //Use the to string method to gather the values of each node 
    //then turn it in to an arry
    let valueArray = this.toString().split('');
    //Return exception based upon the value of K being too large or too small
    if(k > valueArray.length -1 || k < 0) return 'Exception';
    let indexFromEnd = valueArray.length - 1 - k;
    //Return the value at the 'kth' index
    return valueArray[indexFromEnd];
  }

  //Merge two linked lists
  merge(ll1, ll2) {
    //If either linked list does not have a head return an error
    if(!ll1.head || !ll2.head) return console.error('Arguments must not be null');
    //Creating a reference for the current node so that I can traverse them 
    let current = ll1.head;
    let current2 = ll2.head;
    //Create the new linked list
    const newLl = new LinkedList();
    //Insert the data from the two heads of the linked lists
    newLl.insert(current.data);
    newLl.append(current2.data);
    //Traverse through the two linked lists while either one has a .next property that is not null
    while (current.next !== null || current2.next !== null) {
      if (current.next) {
        current = current.next;
        newLl.append(current.data);
      }
      if (current2.next) {
        current2 = current2.next;
        newLl.append(current2.data);
      }
    }
    return newLl;
  }
}






module.exports = LinkedList;