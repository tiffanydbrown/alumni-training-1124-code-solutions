/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen(): any[] {
  const numbers: any[] = [];
  let currentNumber: number = 1;

  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): any[] {
  const evenNumbers: any[] = [];
  let currentNumber: number = 2;

  while (currentNumber <= 20) {
    if (currentNumber % 2 === 0) {
      evenNumbers.push(currentNumber);
    }
    currentNumber++;
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = '';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled: any[] = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function sumArray(numbers: number[]): number {
  let sum: number = 0;

  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

function reverseString(str: string): string {
  let reversed: string = '';

  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function getKeys(obj: Record<string, unknown>): any[] {
  const keys: any[] = [];

  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

function getValues(obj: Record<string, unknown>): any[] {
  const values: any[] = [];

  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
