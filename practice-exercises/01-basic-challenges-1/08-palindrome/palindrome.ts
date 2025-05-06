export function isPalindrome(str: string): boolean {
  const cleaned: string = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reverseStr: string = '';

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reverseStr += cleaned[i];
  }
  if (cleaned === reverseStr) {
    return true;
  }
  return false;
}
