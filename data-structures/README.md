# Singly Linked List part 2 

Add some functionality to the linked list

## Challenge

Write the following methods for the Linked List class:

.append(value) which adds a new node with the given value to the end of the list

.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Space Time

I think the Big 0 and space here are 0(n) 


## API

`append` -> (val)

Inserts a new node to the end of the list

`insertBefore` -> (val, newVal) `returns` node

Checks the linked list for a value and then inserts a new node with newVal as it's data infront of that node

`toString` -> () `returns` node

Checks the linked list for a value and then inserts a new node with newVal as it's data behind of that node