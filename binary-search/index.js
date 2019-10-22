//Declaring inputs array to search and key to search for
let arr = [1,2,3,4,5,6,7,8];
let key = 6;


//Realized I need to put this function in a wrapper to be able to test it succesfully
const binarySearchWrapper =  (arr,key) => {

  console.log(arr,key);
  //Declaring the left side of the array and the right side, then using those to determine the middle
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  //Function binary search is recursive
  const binarySearch = (mid, left, right) => {
    //If the middle of the array is equal to the key return it
    if (arr[mid] === key) return mid;
    //If left is ever bigger than right return -1 to signify not found
    if (left > right) return -1;
    //If the middle is greater than the key search left side
    if (arr[mid] > key) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
      return binarySearch(mid, left, right);
    }

    //If the middle is less than the key search right side
    if (arr[mid] < key) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
      return binarySearch(mid, left, right);
    }
  };

  return binarySearch(mid, left, right);
};

console.log(binarySearchWrapper(arr,key));



module.exports = binarySearchWrapper;