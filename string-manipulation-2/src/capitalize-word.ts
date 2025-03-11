/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  const lowerWord: string = word.toLowerCase();

  if (lowerWord === 'javascript') {
    return 'JavaScript';
  }

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
