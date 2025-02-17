// The Math Object

const heroes: string[] = ['Iron Man', 'Hulk', 'Wolverine', 'Wonder Woman'];
let randomNumber: number = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex: number = Math.floor(randomNumber);
console.log('The value of randomIndex:', randomIndex);

const randomHero: string = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

// Array Methods

const library: any[] = [
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

const lastBook: any = library.pop();
console.log('Value of lastBook:', lastBook);
const firstBook: any = library.shift();
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

const fullName: string = 'Tiffany Brown';
const firstAndLastName: string[] = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);

const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);

// Object Methods

const employee: any = {
  name: 'Tiffany',
  age: '99',
  position: 'manager',
};

const employeeKeys: string[] = Object.keys(employee);
console.log('Value of employeeKeys:', employeeKeys);

const employeeValues: string[] = Object.values(employee);
console.log('Value of employeeValues:', employeeValues);

const employeePairs: any = Object.entries(employee);
console.log('Value of employeePairs:', employeePairs);
