'use strict';
// The Math Object
const heroes = ['Iron Man', 'Hulk', 'Wolverine', 'Wonder Woman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);
// Array Methods
const library = [
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
  {
    title: 'The Stand',
    author: 'Stephen King',
  },
  {
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
  },
];
const lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
const firstBook = library.shift();
console.log('Value of firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library object:', library);
// String Methods
const fullName = 'Tiffany Brown';
const firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
// Object Methods
const employee = {
  name: 'Tiffany',
  age: '99',
  position: 'manager',
};
const employeeKeys = Object.keys(employee);
console.log('Value of employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('Value of employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('Value of employeePairs:', employeePairs);
