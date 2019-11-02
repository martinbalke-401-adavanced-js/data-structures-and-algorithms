# Singly Linked List part 4

Add a method to the Linked List called Merge

## Challenge

Write a method on the linked list class that takes in two linked lists and merges them together in to a singly linked list.

## Space Time

I believe the space for this is O(n) since there is no exponential growth. 


## API

`merge` -> (ll1,ll2) -> `returns a new Linkedlist`

Takes in two linked lists, makes sure they both contain at least one node, then merges the two together in a zipper fashion.