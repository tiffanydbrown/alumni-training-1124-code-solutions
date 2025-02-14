/* exported getFullNameOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person: Person): any {
  return person.firstName + ' ' + person.lastName;
}
