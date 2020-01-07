'use strict';


const quickSort = (array) => {
  if(!Array.isArray(array)) throw new Error('Please provide a non empty array containing only numbers');
  if(array.length <= 1) return array;
  const left = [];
  const right = [];
  let pivot = array.pop();
  array.forEach( number => {
    if (typeof number !== 'number') throw new Error('Please provide a non empty array containing only numbers');
    if(number < pivot) left.push(number);
    else right.push(number);
  });
  return [...quickSort(left),pivot, ...quickSort(right)];


};


module.exports = quickSort;