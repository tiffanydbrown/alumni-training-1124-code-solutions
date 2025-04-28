export function sumOfEvenSquares(numbers: number[]): number {
  const filterNumbers = numbers.filter((num) => {
    return num % 2 === 0;
  });

  const mapNumbers = filterNumbers.map((num) => {
    return num ** 2;
  });

  const sum = mapNumbers.reduce((total, num) => {
    return total + num;
  }, 0);

  return sum;
}
