'use strict';
/* exported ransomCase */
function ransomCase(string) {
  const newString = string.toLowerCase();
  let randomStr = '';
  for (let i = 0; i < newString.length; i++) {
    randomStr += i % 2 !== 0 ? newString[i].toUpperCase() : newString[i];
  }
  return randomStr;
}
