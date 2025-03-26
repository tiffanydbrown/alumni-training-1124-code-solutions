/* exported invert */
function invert(source: any): any {
  const result: any = {};

  for (const key in source) {
    result[source[key]] = key;
  }
  return result;
}
