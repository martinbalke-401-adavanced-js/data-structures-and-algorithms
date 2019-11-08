# Animal Shelter Queue

## Links

-   [PR](https://github.com/martinbalke-401-adavanced-js/data-structures-and-algorithms/pull/12)
-   [Travis](https://www.travis-ci.com/martinbalke-401-adavanced-js/data-structures-and-algorithms)


## Challenge

Create a queue that accepts two classes Dog and Cat. Each of these classes needs to have a name, and print property. Your animal shelter queue class needs to have two methods Enqueue which allows you to add a dog or cat to the animal shelter and Dequeue which removes a dog in a FIFO approach

## Approach & Efficiency

Enqueue is Big O of O(1) because you are only ever adding to the rear of the queue which is saved as a variable

Dequeue is worst case scenario Big O of O(n) because you could have an infinite animal shelter queue with only 1 cat or dog at the end and have to traverse the full list to find them

## API

`Enqueue`(animal) <- accepts a valid animal node and returns the added animal

`Dequeue`(pref) <- Pops a node from the queue based on preferance in a FIFO manner