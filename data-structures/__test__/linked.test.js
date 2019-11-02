'use strict';

const LinkedList = require('../linked-list');

const linkedList = new LinkedList();

describe('Linked list functionality testing', () => {

  it('Creates an empty linked list', () => {
    expect(linkedList.head).toBeFalsy();
  });

  it('Can properly insert in to a linked list', () => {
    linkedList.insert(5);
    expect(linkedList.head.data).toBe(5);
  });
  
  it('The head properly points to the next node when there are two & new nodes are properly inserted', () => {
    linkedList.insert(6);
    expect(linkedList.head.next.data).toBe(5);
  });

  it('Will return true when a value is inside of the linked list', () => {
    expect(linkedList.includes(5)).toBeTruthy();
  });
  
  it('Will return false when the value is not inside of the linked list', () => {
    expect(linkedList.includes(8)).toBeFalsy();
  });
  
  it('Properly returns a string that is all of the values in the list', () => {
    expect(linkedList.toString()).toBe('65');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    linkedList.insertAfter(5, 4);
    expect(linkedList.toString()).toBe('654');
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    linkedList.insertAfter(4, 3);
    expect(linkedList.toString()).toBe('6543');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    linkedList.insertBefore(4,5);
    expect(linkedList.toString()).toBe('65543');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    linkedList.insertBefore(6, 7);
    expect(linkedList.toString()).toBe('765543');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    linkedList.insertAfter(5,4);
    expect(linkedList.toString()).toBe('7654543');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    linkedList.insertAfter(3, 2);
    expect(linkedList.toString()).toBe('76545432');
  });

  it('Can successfully insert a node before the last node of the linked list', () => {
    linkedList.insertBefore(2, 1);
    expect(linkedList.toString()).toBe('765454312');
  });
});