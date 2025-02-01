interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Tiffany',
  lastName: 'Brown',
  age: 99,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('The value of fullName:', fullName);
