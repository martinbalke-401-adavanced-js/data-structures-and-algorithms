# Left Join Hash Tables

## Links

-   Link to Pull Request
-   Link to Travis


## Whiteboard / Drawing

<!-- Photo of your whiteboard or drawing -->

## Challenge

Create a function that takes in two hash tables and returns a left joined list

## Approach & Efficiency

My time is O(n2) which simplifies to O(n) even though I have a nested while loop inside of a for loop each of those is looping over a seperate object only once so if both were infinite the worst case scenario would be infinite + infinite

Space is O(n) I'm using an array to return the results 
## API

`leftJoin(hashtable1, hashtable2) -> Returns Array`