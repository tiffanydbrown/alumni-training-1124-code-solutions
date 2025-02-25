/* exported getIndexes */
function getIndexes(array: any[]): any[] {
  const newArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}
