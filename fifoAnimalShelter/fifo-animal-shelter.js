'use strict';
//Creating the Dog class which is essentially a node in this case
class Dog {
  constructor(name){
    this.name = name;
    this.next = null;
  }
  //Method print allow for console logging of a custom message
  print() {
    console.log(`${this.name} is a good dog!`);
  }
}

//Simmiliar to the dog class
class Cat {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
  print() {
    console.log(`${this.name} is a sweet cat!`);
  }
}

//Animal shelter is a queue data structure that accepts dog and cat nodes
class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  //Enqueue adds a dog or cat node to the animal shelter
  enqueue(animal) {
    //Check the type of the object that is being added. If it's not dog or cat we will throw an error
    let type = animal.constructor.name;
    if(type !== 'Dog' && type !== 'Cat') return console.error( 'This shelter only accepts dogs and cats');
    //Only add animals that have a name property to ensure that print is functioning correctly
    if(animal.name === null) return console.error( 'Please give your little animal a name');
    //If this is the first node added make it both the the front and rear
    if(!this.front) return this.front = animal, this.rear = animal;
    //Else make it the rear 
    this.rear.next = animal;
    return this.rear = animal;

  }

  //Dequeue allows the user to remove an animal from the queue based on their prefference
  dequeue(pref){
    //Set up a variable to allow us to traverse the queue
    let current = this.front;
    //Track the previous node in the queue 
    let previous = null;
    //While current is not null cycle through the list checking for our preference
    while(current) {
      //If we find a match or the pref was an empty string return the match
      if (pref === '' || pref === current.constructor.name) {
        return this.pop(current, previous);
      }
      //Variable change to allow us to cycle
      previous = current;
      current = current.next;
    }
    //If we hit this line no match was found
    return 'No match found';
  }

  //Pop is a method that allows us to remove a node from the queue
  pop(current, previous) {
    //If previous is null we know that this is the rear node so we need to change the rear when removing it
    if(previous === null) this.front = current.next;
    else previous.next = current.next;
    //If next is null we know this is the tail node so we need to change the tail when removing it
    if(current.next === null) this.rear = previous;
    current.print();
    current.next = null;
    return current;
  }
  

}

module.exports = {
  Cat,
  Dog,
  AnimalShelter,
};