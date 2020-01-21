'use strict';
/**
 * Insertion sort takes in an array and sorts it by using two while loops to compare values
 * @param {Array} array  - The unsorted array you want to sort
 * @returns {Array} - The new sorted array
 */
const insertionSort = (array) => {
  //Type and length checking
  if(!Array.isArray(array) || array.length < 1) return console.error('Not a valid array');
  //Making a new array with the spread operator to stop mutation
  let newArray = [...array];
  let i = 0;
  while(i < newArray.length){ 
    if(typeof newArray[i] !== 'number' ) return console.error('Array must only contain numbers');
    let j = i;
    while(j > 0){
      if(newArray[j] < newArray[j -1]){
        let temp = newArray[j];
        newArray[j] = newArray[j -1];
        newArray[j-1] = temp;
      }
      j--;
    }
    i++;
  }
  return newArray;
};
module.exports = insertionSort;
