# Stacks and Queues

Creating a Stack data structure class as well as a Queue data structure class

## Challenge

Create a Stack data structure class that has a top property and the following methods push, pop, and peek

Create a Queue class that has a front and rear property and the following methods enqueue, dequeue, and peek

## Approach & Efficiency

### Stack Methods:
 Because I'm only ever touching the top of the stack the length of the entire stack is never traversed so it takes the same time worst case and best case 

  `Push O(1)` 

  ` Pop O(1)`

  `Peek O(1)`

### Queue Methods:

Because I have variables for both the front and back of the queue anytime I do operations adding or removing I only need to go to them so worst case I will only ever traverse one node to perform an opeartion
  
  `Enqueue O(1)`
  
  `Dequeue O(1)`
  
  `Peek O(1)`

## API
### Stack

`Push` (val) -> `Returns the node added to the top`

`Pop` () -> `Returns the node removed from the top`

`Peek` () -> `Returns the top node of the stack`

### Queue

`Enqueue` (value) -> `Returns the rear node of the queue`

`Dequeue` () -> `Returns the node removed from the queue`

`Peek` () -> `Returns this.front node`
