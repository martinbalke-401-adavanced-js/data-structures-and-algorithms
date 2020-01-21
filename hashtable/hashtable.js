'use strict';

const LinkedList = require('../linked-list/linked-list');


/**
 * Hash Table is a class for the datastructure hashtable
 * @class
 */
class HashTable {
  /**
   * @constructor
   * @param {Number} size - The size of the hashtable array you want to create 
   */
  constructor(size){
    this.size = size;
    this.array = [];
    //Making each of the indexes a new linked list
    for(let i = 0; i < size; i++) this.array[i] = new LinkedList();
  }
  /**
   * Hash is a method that takes in a key string and returns a number to use an index
   * @param {String} key -The string we want to hash
   * @returns {Number} - The hashed number
   */
  hash(key){
    let hash = 1;
    for(let i = 0; i < key.length -1; i++){
      hash *= key.charCodeAt(i);
    }
    hash = (hash * 599) % this.size;
    return hash;
  }
  
  /**
   * Add takes in a key and a value and inserts it in to the hashtable
   * @param {String} key - A key used to look up the value
   * @param {*} value - Any value you would like to insert in to the hash table 
   * @returns {Object} - The linked list of where the data was inserted
   */
  add(key, value){
    const index = this.hash(key);
    let data = {};
    data[key] = value;
    return this.array[index].insert(data);
  }
  /**
   * Get takes in a key and returns the value of the hashtable at that key
   * @param {String} key - The key to search by
   * @returns {*} - Whatever value is found
   * @returns {Null} - No match
   */
  get(key){
    const index = this.hash(key);
    let bucket = this.array[index].head;
    while (bucket) {
      if (bucket.data[key]) return bucket.data[key];
      bucket = bucket.next;
    }
    return null;
  }
  /**
   * Contains returns a boolean to see if a key is in the hash table
   * @param {String} key 
   * @returns {Boolean}
   */
  contains(key){
    const index = this.hash(key);
    let bucket = this.array[index].head;
    while(bucket){
      if(bucket.data[key]) return true;
      bucket = bucket.next;
    }
    return false;
  }

}


module.exports = HashTable;