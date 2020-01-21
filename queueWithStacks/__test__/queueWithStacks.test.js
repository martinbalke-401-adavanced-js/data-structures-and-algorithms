'use strict';
const PseudoQueue = require('../queue-with-stacks');
const pseudo = new PseudoQueue();

describe('Testing for queue with stacks', () => {
  it('Can successfully instantiate an empty queue', () => {
    expect(pseudo.front.top).toBe(null);
    expect(pseudo.rear.top).toBe(null);
  });
  it('Can successfully enqueue into your pseudo queue', () => {
    pseudo.enqueue('the');
    expect(pseudo.front.top.value).toBe('the');
  });
  it('Can successfully enqueue multiple values into your queue', () => {
    pseudo.enqueue('fox');
    expect(pseudo.front.top.value).toBe('fox');
    expect(pseudo.front.top.next.value).toBe('the');
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    expect(pseudo.dequeue().value).toBe('the');
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    pseudo.dequeue();
    expect(pseudo.front.top).toBe(null);
    expect(pseudo.rear.top).toBe(null);
  });
});