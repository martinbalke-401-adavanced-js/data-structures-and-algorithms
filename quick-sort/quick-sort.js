'use strict';


/**
 * Quick sort is a function that takes an unsorted array and sorts it using the quick sort methodology
 * @param {Array} array - The unsorted array 
 * @returns {Array} - The sorted array
 */
const quickSort = (array) => {
  //Checking to see if the array paramater is correctly and array
  if(!Array.isArray(array)) throw new Error('Please provide a non empty array containing only numbers');
  //BASE CASE
  if(array.length <= 1) return array;
  //Declaring a left array for the smaller numbers
  const left = [];
  //Right array for the larger numbers
  const right = [];
  //Grabbing a pivot number by popping it off of the array
  let pivot = array.pop();
  //Itterating over each number in the remainder of the array and checking if it's a number if it is then it gets sorted
  array.forEach( number => {
    if (typeof number !== 'number') throw new Error('Please provide a non empty array containing only numbers');
    if(number < pivot) left.push(number);
    else right.push(number);
  });

  //return the resulting array from quicksorting left + the pivot + the resulting array from quicksorting right
  //using the spread operator to combine the arrays together
  return [...quickSort(left),pivot, ...quickSort(right)];


};


module.exports = quickSort;