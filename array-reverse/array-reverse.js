'use strict';

const reverseArray = (arr) => {
  const newArray = [];
  let decrementingIndex = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[decrementingIndex]
    decrementingIndex--;
  }

  return newArray;
};

//Uncomment code below to test
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]	));


