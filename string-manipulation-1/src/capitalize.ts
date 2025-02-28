/* exported capitalize */
function capitalize(string: string): string {
  const newString: string = string.toLowerCase();

  return newString.charAt(0).toUpperCase() + newString.slice(1);
}
