export function countOccurrences(str: string, char: string): number {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
