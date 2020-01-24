'use strict';

/**
 * String to an array is a function that allows you to turn a string in to a sanitized array
 * @param {String} string - The string you wish to turn in to an array
 * @returns {Array} - The string transformed in to an array
 */
function stringToArray (string) {
  //Addding a period to the end to ensure last word makes the array
  string += '.';
  let stringArray = [];
  let x = 0;
  let word = '';
  //This loop goes over the string and makes a word as long as the current character is not punctuation. If it finds punctuation it assigns the current word to the array and resets the current word
  for (let j = 0; j < string.length; j++) {
    if (string[j] !== ',' && string[j] !== ' ' && string[j] !== '.') word += string[j].toLowerCase();
    else {
      if(word !== ''){
        stringArray[x] = word;
        x++;
        word = '';

      }
    }
  }
  return stringArray;
}

/**
 * Repeated word checks a string for the first repeated word
 * @param {String} string 
 * @returns {Error} - Incorrect paramters or no matching string
 * @returns {String} - The matching string
 */
const repeatedWord = (string) => {
  //Checking for correct type and length
  if(typeof string !== 'string' || string.length < 1) return console.error('This function requires a non empty string');
  let stringArray = stringToArray(string);


  let end = 1, i = 0;
  while(end < stringArray.length){
   
    
    if(stringArray[i] === stringArray[end]) return stringArray[end];
    
    i++;
    if(i === end) {
      end++;
      i = 0;
    }
  }
  return console.error('No repeated words');
};

module.exports = repeatedWord;
