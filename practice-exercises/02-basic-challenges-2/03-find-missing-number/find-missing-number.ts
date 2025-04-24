export function findMissingNumber(arr: number[]): number | undefined {
  let sum: number = 0;
  const n: number = arr.length + 1;
  const inclusive: number = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const missNum = inclusive - sum;
  return missNum;
}
