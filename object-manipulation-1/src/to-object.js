'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const newKey = keyValuePair[0];
  const newValue = keyValuePair[1];
  const obj = { [newKey]: newValue };
  return obj;
}
