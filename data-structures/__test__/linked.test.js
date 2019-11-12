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
  
  let linked = new LinkedList();
  it('Where the linked list is of a size 1', () => {
    linked.insert(4);
    expect(linked.kthFromEnd(0)).toBe('4');
  });
  it('Where k is greater than the length of the linked list', () => {
    expect(linked.kthFromEnd(2)).toBe('Exception');
  });
  it('Where k and the length of the list are the same', () => {
    linked.insert(5);
    linked.insert(6);
    expect(linked.kthFromEnd(2)).toBe('6');
  });
  it('Where k is not a positive integer', () => {
    expect(linked.kthFromEnd(-2)).toBe('Exception');
  });
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(linked.kthFromEnd(1)).toBe('5');
  });
});

describe('merge function testing', () => {
  let ll1 = new LinkedList();
  let ll2 = new LinkedList();
  ll1.append(1);

  it('Properly returns an error when one list is null', () => {
    try {
      ll1.merge(ll1,ll2);
    } catch (error) {
      expect(error).toBe('Arguments must not be null');
    }
  });
  it('Works when the lists are both of length 1', () => {
    ll2.append(2);
    let newLl = ll1.merge(ll1, ll2);
    expect(newLl.toString()).toBe('12');
  });
  it('Works when the lists are the same size', () => {
    ll1.append(3);
    ll2.append(4);
    let newLl = ll1.merge(ll1, ll2);
    expect(newLl.toString()).toBe('1234');
  });
  it('Works when one list is shorter than the other', () => {
    ll2.append(5);
    let newLl = ll1.merge(ll1, ll2);
    expect(newLl.toString()).toBe('12345');
  });

});