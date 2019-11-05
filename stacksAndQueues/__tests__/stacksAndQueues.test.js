'use strict';

const {Queue, Stack} = require('../index');
const queue = new Queue();
const stack = new Stack();

describe('Stack testing', ()=> {
  it('Can successfully instantiate an empty stack', () => {
    expect(stack.top).toBe(null);
  });
  it('Can successfully push onto a stack', () => {
    stack.push(3);
    expect(stack.top.value).toBe(3);
  });
  it('Can successfully push multiple values onto a stack', () => {
    stack.push(4);
    expect(stack.top.value).toBe(4);
  });
  it('Can successfully pop off the stack', () => {
    let removed = stack.pop();
    expect(removed.value).toBe(4);
    expect(stack.top.value).toBe(3);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    stack.pop();
    expect(stack.top).toBe(null);
  });
  it('Can successfully peek the next item on the stack', () => {
    expect(stack.peek()).toBe(null);
    stack.push(1);
    expect(stack.top.value).toBe(1);
  });
});


describe('Queue testing', ()=> {
  it('Can successfully instantiate an empty queue', () => {
    expect(queue.front).toBe(null);
  });
  it('Can successfully enqueue into a queue', () => {
    queue.enqueue(3);
    expect(queue.front.value).toBe(3);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(4);
    expect(queue.rear.value).toBe(4);
    console.log(queue);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let removed = queue.dequeue();
    expect(removed.value).toBe(3);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let peek = queue.peek();
    expect(peek.value).toBe(4);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    let peek = queue.peek();
    expect(peek).toBe(null);
    expect(queue.front).toBe(null);
    expect(queue.rear).toBe(null);
  });
});