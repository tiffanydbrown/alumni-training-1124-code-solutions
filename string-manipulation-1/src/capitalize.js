'use strict';
/* exported capitalize */
function capitalize(string) {
  const newString = string.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
}
