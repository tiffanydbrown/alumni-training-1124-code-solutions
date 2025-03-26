/* exported omit */
function omit(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
