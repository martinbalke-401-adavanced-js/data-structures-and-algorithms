'use strict';

const multiBracketValidation = (str) => {
  let leftParenCounter = 0;
  let leftBracketCounter = 0;
  let leftCurlyCounter = 0;
  let rightParenCounter = 0;
  let rightBracketCounter = 0;
  let rightCurlyCounter = 0;
  let strArray = str.split('');



  for(let i = 0; i < strArray.length; i++){

    if(strArray[i] === '(') leftParenCounter ++;
    if(strArray[i] === '[') leftBracketCounter ++;
    if(strArray[i] === '{') leftCurlyCounter ++;

    if (strArray[i] === ')') rightParenCounter ++;
    if (strArray[i] === ']') rightBracketCounter ++;
    if (strArray[i] === '}') rightCurlyCounter ++;
  }
  return leftParenCounter === rightParenCounter && leftCurlyCounter === rightCurlyCounter && leftBracketCounter === rightBracketCounter;

};
module.exports = multiBracketValidation;
