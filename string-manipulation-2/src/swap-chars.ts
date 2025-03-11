/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  if (
    firstIndex < 0 ||
    firstIndex >= string.length ||
    secondIndex < 0 ||
    secondIndex >= string.length
  ) {
    return 'Invalid index';
  }
  const arr: any[] = string.split('');
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  return arr.join('');
}
