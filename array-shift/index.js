const shiftArray = (arr, input) => {
  const shiftedArray = [];
  let middle = arr.length / 2;
  if(middle % 2 !== 0) middle += .5;
  for(let i = 0; i < arr.length; i++){
    if(middle > i ) shiftedArray[i] = arr[i];
    if(middle === i){
      shiftedArray[i] = input;
      shiftedArray[i + 1] = arr[i];
    }
    if(middle < i) shiftedArray[i + 1] = arr[i];
  }
  return shiftedArray;
};

console.log(shiftArray([2,4,6,8], 5));
console.log(shiftArray([4,8,15,23,42], 16));

module.exports = shiftArray;