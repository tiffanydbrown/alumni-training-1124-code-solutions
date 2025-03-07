'use strict';
/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return [];
  }
  const newArr = [];
  for (let i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
