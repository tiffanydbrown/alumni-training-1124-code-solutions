'use strict';
/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  const newString = string.split(' ');
  return newString;
}
