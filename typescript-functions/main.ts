function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('Number of seconds in five minutes:', convertMinutesToSeconds(5));
console.log('Number of seconds in ten minutes:', convertMinutesToSeconds(10));

function greet(name: string): string {
  return 'Hey ' + name + '!';
}

console.log(
  'The value of a concatenated string containing the value in the name parameter:',
  greet('Beavis')
);
console.log(
  'The value of a concatenated string containing the value in the name parameter:',
  greet('SpongeBob')
);

const getArea = (width: number, height: number): number => width * height;

console.log("The area's value:", getArea(17, 42));
console.log("The area's value:", getArea(22, 38));

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => person.firstName;

console.log(
  'Value of the first name:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
console.log(
  'Value of the first name:',
  getFirstName({ firstName: 'John', lastName: 'Henry' })
);

const getLastElement = (array: any[]): number => array[array.length - 1];

console.log(
  'The value stored in the last index:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log(
  'The value stored in the last index:',
  getLastElement([true, true, false, true])
);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log(
  'Value returned from calling otherFunction:',
  callOtherFunction(convertMinutesToSeconds, 10)
);
console.log(
  'Value returned from calling otherFunction:',
  callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])
);
