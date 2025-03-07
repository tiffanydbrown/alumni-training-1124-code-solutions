/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];

  if (count <= 0 || array.length === 0) {
    return newArr;
  }

  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
