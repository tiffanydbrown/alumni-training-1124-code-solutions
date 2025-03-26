'use strict';
/* exported invert */
function invert(source) {
  const result = {};
  for (let key in source) {
    result[source[key]] = key;
  }
  return result;
}
