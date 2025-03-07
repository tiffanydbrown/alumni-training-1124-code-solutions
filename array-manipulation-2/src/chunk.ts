/* exported chunk */
function chunk(array: unknown[], size: number): unknown[][] {
  const newArr: unknown[][] = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk: unknown[] = [];
    for (let j = 0; j < size && i + j < array.length; j++) {
      chunk.push(array[i + j]);
    }
    newArr.push(chunk);
  }
  return newArr;
}
