'use strict';
/* exported drop */
function drop(array, count) {
  const newArr = [];
  if (count <= 0 || array.length === 0) {
    return newArr;
  }
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
