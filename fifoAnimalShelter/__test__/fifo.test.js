'use strict';
const {Cat, Dog, AnimalShelter} = require('../fifo-animal-shelter');
let animalShelter = new AnimalShelter();


describe('fifo animal shelter testing', () => {
  it('Can successfully enqueue a Dog', () => {
    let rover = new Dog('Rover');
    animalShelter.enqueue(rover);
    expect(animalShelter.front.name).toBe('Rover');
  });
  it('Can successfully enqueue a Cat', () => {
    let rover = new Cat('Luna');
    animalShelter.enqueue(rover);
    expect(animalShelter.front.next.name).toBe('Luna');
  });
  it('Error handling when you try to enqueue something that is neither a cat nor a dog', () => {
    try {
      animalShelter.enqueue('steve');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it('Can Successfully dequeue a Dog', () => {
    let dog = animalShelter.dequeue('Dog');
    expect(dog.name).toBe('Rover');
  });
  it('Can Successfully dequeue a Cat', () => {
    let cat = animalShelter.dequeue('Cat');
    expect(cat.name).toBe('Luna');
  });
  it('Succesfully dequeues when no parameter is given', () => {
    let garfield = new Cat('Garfield');
    animalShelter.enqueue(garfield);
    let thing = animalShelter.dequeue('');
    expect(thing.name).toBe('Garfield');
  });
  it('Error handling when you try to dequeue something that is neither an animal nor an empty string', () => {
    try {
      animalShelter.dequeue('bob');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});