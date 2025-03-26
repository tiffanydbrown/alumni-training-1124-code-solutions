'use strict';
/* exported defaults */
function defaults(target, source) {
  for (let key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
