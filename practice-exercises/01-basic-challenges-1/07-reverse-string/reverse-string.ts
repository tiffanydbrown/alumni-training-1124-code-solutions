export function reverseString(str: string): string {
  let backwardStr: string = '';

  for (let i = str.length - 1; i >= 0; i--) {
    backwardStr += str[i];
  }
  return backwardStr;
}
