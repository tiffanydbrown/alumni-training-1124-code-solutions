const width: number = 5;
const height: number = 8;
const area: number = width * height;
console.log('Value of Area: ', area);
console.log('Data Type of Area: ', typeof area);

const bill: number = 75;
const payment: number = 125;
const change: number = payment - bill;
console.log('Amount of Change: ', change);
console.log('Data Type of Change: ', typeof change);

const quizzes: number = 15;
const midterm: number = 25;
const final: number = 50;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Value of grade: ', grade);
console.log('Data Type of Grade: ', typeof grade);

const firstName: string = 'Tiffany';
const lastName: string = 'Brown';
const fullName: string = firstName + ' ' + lastName;
console.log('Value of fullName: ', fullName);
console.log('Data Type of fullName: ', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH > 7;
console.log('Value of isAcidic: ', isAcidic);
console.log('Data Type of isAcidic: ', typeof isAcidic);

const headCount: number = 322;
const isSparta: boolean = headCount === 300;
console.log('The value of isSparta: ', isSparta);
console.log('Data Type of isSparta: ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('The value of motto: ', motto);
console.log('The Data Type of motto: ', typeof motto);
