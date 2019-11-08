'use strict';
const Fifo = require('../fifo-animal-shelter');
let fifoQueue = new Fifo();


describe('fifo animal shelter testing', () => {
  it('Can successfully enqueue a Dog', () => {});
  it('Can successfully enqueue a Cat', () => {});
  it('Error handling when you try to enqueue something that is neither a cat nor a dog', () => {});
  it('Can Successfully dequeue a Dog', () => {});
  it('Can Successfully dequeue a Cat', () => {});
  it('Succesfully dequeues when no parameter is given', () => {});
  it('Error handling when you try to dequeue something that is neither an animal nor an empty string', () => {});
  it('Successfully prints the resulting object from a dequeue', () => {});
});