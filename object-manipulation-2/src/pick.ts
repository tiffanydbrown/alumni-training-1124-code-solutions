/* exported pick */
function pick(source: any, keys: string[]): any {
  const result: any = {};

  for (const key of keys) {
    if (key in source && source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
