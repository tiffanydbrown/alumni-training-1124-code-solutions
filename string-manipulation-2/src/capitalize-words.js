'use strict';
/* exported capitalizeWords */
function capitalizeWords(strings) {
  return strings
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
