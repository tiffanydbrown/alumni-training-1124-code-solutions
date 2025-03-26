'use strict';
/* exported pick */
function pick(source, keys) {
  const result = {};
  for (let key of keys) {
    if (key in source && source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
