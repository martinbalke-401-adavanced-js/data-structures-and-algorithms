'use strict';

function treeIntersection(root1, root2){

  if (!root1.value || !root2.value) return console.error('Please only inset tree roots'); 

  function treeToArray(root, array){
    array.push(root.value);
    if (root.left !== null) treeToArray(root.left, array);
    if (root.right !== null) treeToArray(root.right, array);
    return array;

  }

  const treeArray1 = [];
  treeToArray(root1, treeArray1);

  const treeArray2 = [];
  treeToArray(root2, treeArray2);

  const result = [];
  for(let i = 0; i < treeArray1.length; i++){
    for(let j = 0; j < treeArray2.length; j++){
      if(treeArray1[i] === treeArray2[j]) result.push(treeArray2[j]);
    }
  }



  return result;


}


module.exports = treeIntersection;
