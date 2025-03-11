/* exported ransomCase */
function ransomCase(string: string): string {
  const newString: string = string.toLowerCase();
  let randomStr: string = '';

  for (let i = 0; i < newString.length; i++) {
    randomStr += i % 2 !== 0 ? newString[i].toUpperCase() : newString[i];
  }
  return randomStr;
}
