export function areAllCharactersUnique(str: string): boolean {
  const set1 = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (set1.has(char)) {
      return false;
    }
    set1.add(char);
  }
  return true;
}
