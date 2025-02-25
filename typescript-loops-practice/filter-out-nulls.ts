/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const arr: any[] = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      arr.push(values[i]);
    }
  }
  return arr;
}
