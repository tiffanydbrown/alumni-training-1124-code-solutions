interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Tiffany',
  lastName: 'Brown',
  age: 99,
};

const vehicle: Vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 1965,
};

const pet: Pet = {
  name: 'Marinara',
  kind: 'cat',
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('The value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'teacher';
console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of Student Object:', student);
console.log('Data Type of Student Object:', typeof student);

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;
console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Data Type of vehicle:', typeof vehicle);

delete pet.name;
delete pet.kind;
console.log('Value of pet Object:', pet);
console.log('Data Type of pet Object:', typeof pet);
