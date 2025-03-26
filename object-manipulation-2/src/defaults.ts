/* exported defaults */
function defaults(target: any, source: any): void {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
