'use strict';
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
function isUnderFive(number) {
  return number < 5;
}
function isEven(number) {
  return number % 2 === 0;
}
function startsWithJ(string) {
  return string[0] === 'J';
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
function categorizeAcidity(pH) {
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
function introduceWarnerBro(name) {
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
function recommendMovie(genre) {
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
