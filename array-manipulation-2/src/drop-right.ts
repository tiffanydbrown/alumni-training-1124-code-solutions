/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  if (count >= array.length) {
    return [];
  }

  const newArr: unknown[] = [];

  for (let i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
