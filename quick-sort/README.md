# Quicksort

## Links

-   [PR](https://github.com/martinbalke-401-adavanced-js/data-structures-and-algorithms/pull/17)
-   [Travis](https://www.travis-ci.com/martinbalke-401-adavanced-js/data-structures-and-algorithms)


## Whiteboard / Drawing

<!-- Photo of your whiteboard or drawing -->

## Challenge

Implement a quick sort algorithm for sorting arrays of numbers

## Approach & Efficiency

Worst case quick sort is a Big O of o(n^2) this can happen because the pivot can end up being the smallest of largest number in the array every time it is selected which would mean every number is sorted every single time

Space complexity is O(n) because I am making multiple copies of the array

## API

`quickSort([array]) -> sorted [array]`
