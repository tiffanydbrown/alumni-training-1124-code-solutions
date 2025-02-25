/* exported getStudentNames */
function getStudentNames(students: any[]): any[] {
  const arr: any[] = [];
  for (const student of students) {
    arr.push(student.name);
  }
  return arr;
}
