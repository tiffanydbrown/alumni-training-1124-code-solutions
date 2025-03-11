/* exported numVowels */
function numVowels(string: string): number {
  let vowels: number = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A') {
      vowels += 1;
    } else if (string[i] === 'e' || string[i] === 'E') {
      vowels += 1;
    } else if (string[i] === 'i' || string[i] === 'I') {
      vowels += 1;
    } else if (string[i] === 'o' || string[i] === 'O') {
      vowels += 1;
    } else if (string[i] === 'u' || string[i] === 'U') vowels += 1;
  }
  return vowels;
}
