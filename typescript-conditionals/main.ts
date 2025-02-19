/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  return number < 5;
}

function isEven(number: number): boolean {
  return number % 2 === 0;
}

function startsWithJ(string: string): boolean {
  return string[0] === 'J';
}

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH: number): string {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: any): any {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
      break;
    case 'wakko':
      return "We're the warner brothers!";
      break;
    case 'dot':
      return "I'm cute~";
      break;
    default:
      return 'Goodnight everybody!';
      break;
  }
}

function recommendMovie(genre: string): any {
  switch (genre) {
    case 'action':
      return 'Die Hard';
      break;
    case 'comedy':
      return 'Zoolander';
      break;
    case 'horror':
      return 'A Nightmare on Elm Street';
      break;
    case 'drama':
      return 'A Few Good Men';
      break;
    case 'musical':
      return 'My Fair Lady';
      break;
    case 'sci-fi':
      return 'Alien';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
      break;
  }
}
