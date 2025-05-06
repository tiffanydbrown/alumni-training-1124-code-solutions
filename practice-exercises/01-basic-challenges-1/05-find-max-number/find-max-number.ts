export function findMaxNumber(arr: number[]): number {
  let maxNum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
