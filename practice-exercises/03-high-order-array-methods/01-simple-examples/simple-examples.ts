const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((num) => {
  return num * 2;
});
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => {
  console.log(num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const found = numbers.find((num) => num > 4);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
function checkAvailability(numbers: number[], val: number): boolean {
  return numbers.some((numVal) => val === numVal);
}

checkAvailability(numbers, 2);
/**
 * every: Checks if all array elements satisfy a condition.
 */
const isBelowThreshold = (currentValue: number): boolean => currentValue < 10;
console.log(numbers.every(isBelowThreshold));
