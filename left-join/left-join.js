'use strict';


/**
 * Left join takes in two hash tables and joins the second hash table to the first where values match
 * @param {Object} ht1 - ht1 represents the first hash table
 * @param {Object} ht2  - ht2 represents the second hash table
 * @returns {Array} - The joined values
 */
const leftJoin = (ht1, ht2) => {
  const joinedTable = [];

  //Iterate over the array
  for(let i = 0; i < ht1.array.length; i++){
    //Itterate over the buckets linked list
    if(ht1.array[i].head !== null){
      let current = ht1.array[i].head;
      while(current){
        //Get the key from the current list
        let key = Object.keys(current.data)[0];
        //Get the values in both hash tables from that key
        let ht1Value = ht1.get(key); 
        let ht2Value = ht2.get(key);

        let object = {};
        object[key] = [ht1Value, ht2Value];
        //Push the joined values on to the array
        joinedTable.push(object);
        //If there are more values in the bucket continue iterating over it
        current = current.next;
      }


    }
  }
  return joinedTable;
};


module.exports = leftJoin;