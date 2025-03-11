/* exported capitalizeWords */
function capitalizeWords(strings: string): string {
  return strings
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
