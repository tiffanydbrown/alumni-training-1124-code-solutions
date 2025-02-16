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
