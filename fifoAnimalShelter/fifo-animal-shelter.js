'use strict';
class Dog {
  constructor(name){
    this.name = name;
    this.next = null;
  }
  print() {
    console.log(`${this.name} is a good dog!`);
  }
}

class Cat {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
  print() {
    console.log(`${this.name} is a sweet cat!`);
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let type = animal.constructor.name;
    if(type !== 'Dog' && type !== 'Cat') return console.error( 'This shelter only accepts dogs and cats');
    if(animal.name === null) return console.error( 'Please give your little animal a name');
    if(!this.front) return this.front = animal, this.rear = animal;
    this.rear.next = animal;
    return this.rear = animal;

  }

  dequeue(pref){
    if(!this.peek()) return `The queue is empty`;
    let current = this.head;
    let previous = null;
    while(current) {
      if (pref === '' || pref === current.constructor.name) {
        return this.pop(current, previous);
      }
      previous = current;
      current = current.next;
    }
    return 'No match found';
  }

  pop(current, previous) {
    if(previous === null) this.head = current.next;
    if(current.next === null) this.rear = previous;
    previous.next = current.next;
    current.print();
    current.next = null;
    return current;
  }

  peek(){
    return this.head;
  }

}
let queue = new AnimalShelter();
let james = new Cat('James');
let kitty = new Cat('Kitty');
let rufus = new Dog('Rufus');

let arr = [james, kitty, rufus];
arr.forEach( (animal) => queue.enqueue(animal));


console.log(queue);

module.exports = {};