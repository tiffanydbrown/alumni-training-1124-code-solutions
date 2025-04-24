export function findMissingLetter(arr: string[]): string | undefined {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = str.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== str[startIndex + i]) {
      return str[startIndex + i];
    }
  }

  return undefined;
}
