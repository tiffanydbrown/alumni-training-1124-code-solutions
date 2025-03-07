'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArr = [];
  if (count >= array.length) {
    for (let i = 0; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
  for (let i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
