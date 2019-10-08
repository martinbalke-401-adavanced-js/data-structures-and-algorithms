let arr;
let key;
let left = 0;
let right = arr.length - 1;
let mid = Math.floor((left + right) / 2);


const binarySearch = (mid, left, right) => {
  if(arr[mid] === key) return mid;
  if(left > right) return -1;
  if(arr[mid] > key){
    right = mid -1;
    mid = Math.floor((left + right) / 2);
    return binarySearch(mid, left, right);
  }
  if(arr[mid] < key){
    
    left = mid + 1;
    mid = Math.floor((left + right) / 2);
    return binarySearch(mid, left, right);
  }
};



module.exports = binarySearch();