/* exported getWords */
function getWords(string: string): any[] {
  if (string === '') {
    return [];
  }

  const newString: string[] = string.split(' ');

  return newString;
}
