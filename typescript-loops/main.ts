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
