# Singly Linked List part 3

Add a method to the Linked List called Kth-from-the-end

## Challenge

Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Space Time

Since i'm creating a new array and traversing twice I think the space time is O(2n) which simplifies to 0(n)


## API

`kthFromTheEnd` -> (k) -> `returns a value`

Go to the end of the linked list and count backwards 'k' times then return the value of that particular node.