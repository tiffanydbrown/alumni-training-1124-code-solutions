'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowerWord = word.toLowerCase();
  if (lowerWord === 'javascript') {
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
