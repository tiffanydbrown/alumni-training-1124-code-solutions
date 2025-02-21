'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const arr = [];
  for (const student of students) {
    arr.push(student.name);
  }
  return arr;
}
