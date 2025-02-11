'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('Number of seconds in five minutes:', convertMinutesToSeconds(5));
console.log('Number of seconds in ten minutes:', convertMinutesToSeconds(10));
function greet(name) {
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
const getArea = (width, height) => width * height;
console.log("The area's value:", getArea(17, 42));
console.log("The area's value:", getArea(22, 38));
const getFirstName = (person) => person.firstName;
console.log(
  'Value of the first name:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
console.log(
  'Value of the first name:',
  getFirstName({ firstName: 'John', lastName: 'Henry' })
);
const getLastElement = (array) => array[array.length - 1];
console.log(
  'The value stored in the last index:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log(
  'The value stored in the last index:',
  getLastElement([true, true, false, true])
);
function callOtherFunction(otherFunction, params) {
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
