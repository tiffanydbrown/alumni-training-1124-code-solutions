'use strict';
/* exported omit */
function omit(source, keys) {
  const result = {};
  for (let key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
