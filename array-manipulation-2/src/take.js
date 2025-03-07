'use strict';
/* exported take */
function take(array, count) {
  const newArr = [];
  if (count <= 0 || array.length === 0) {
    return newArr;
  }
  for (let i = 0; i < count && i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
