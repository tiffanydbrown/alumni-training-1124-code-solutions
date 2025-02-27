/* exported compact */
function compact(array: any[]): unknown {
  const newArray: any[] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
