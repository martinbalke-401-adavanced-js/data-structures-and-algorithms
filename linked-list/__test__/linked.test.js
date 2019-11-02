'use strict';

const LinkedList = require('../linked-list');

const linkedList = new LinkedList();

describe('Linked list functionality testing', () => {

  it('Creates an empty linked list', () => {
    expect(linkedList.head).toBeFalsy();
  });

  it('Can properly insert in to a linked list', () => {
    linkedList.insert(6);
    expect(linkedList.head.data).toBe(6);
  });
  it('The head properly points to the next node when there are two & new nodes are properly inserted', () => {
    linkedList.insert(5);
    expect(linkedList.head.next.data).toBe(6);
  });

  it('Will return true when a value is inside of the linked list', () => {
    expect(linkedList.includes(5)).toBeTruthy();
  });
  it('Will return false when the value is not inside of the linked list', () => {
    expect(linkedList.includes(8)).toBeFalsy();
  });
  it('Properly returns a string that is all of the values in the list', () => {
    expect(linkedList.toString()).toBe('56');
  });

});