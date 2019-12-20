# Pseudo Queue

## Links

-   [Pull Request](https://github.com/martinbalke-401-adavanced-js/data-structures-and-algorithms/pull/11)
-   [Travis](https://www.travis-ci.com/martinbalke-401-adavanced-js/data-structures-and-algorithms)


## Challenge

Create a class called PseudoQueue that has the same functionality as a queue but uses stacks instead of nodes

## Approach & Efficiency

I chose to import my old stack class and use functional programming to make the methods of PseudoQueue

`Enqueue`  I'm only ever pushing on to the front with one action this is Big O of O(1) and Space Complexity of O(n) as the value could be an infinite array

`Dequeue` I have to traverse the whole front stack to perform this task so Big O is O(n) and Space Complexity is O(n)


## API

`Enqueue` (val) `Returns the node pushed onto this.front `
`Dequeue`() `Returns removed node from this.rear`
