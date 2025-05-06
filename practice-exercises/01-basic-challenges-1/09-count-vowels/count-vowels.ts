export function countVowels(str: string): number {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      count++;
    } else if (str[i] === 'e' || str[i] === 'E') {
      count++;
    } else if (str[i] === 'i' || str[i] === 'I') {
      count++;
    } else if (str[i] === 'o' || str[i] === 'O') {
      count++;
    } else if (str[i] === 'u' || str[i] === 'U') {
      count++;
    }
  }
  return count;
}
