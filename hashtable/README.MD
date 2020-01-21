# Hashtables

[PR](https://github.com/martinbalke-401-adavanced-js/data-structures-and-algorithms/pull/19)
[Travis](https://www.travis-ci.com/martinbalke-401-adavanced-js/data-structures-and-algorithms)


## Challenge

Create a hash table data structure class with add, get, contains, and hash methods.

## Approach & Efficiency

Because of the way that hash tables work all lookups and inserts are O(1)
Space is O(n)

## API

`HashTable.hash(key)` -> Takes in a string and returns an int
`HashTable.contains(key)` -> Takes in a string and returns a boolean
`HashTable.add(key, value)` -> Takes in a string and * returns an Object
`HashTable.get(key)` -> Takes in a string and returns *