import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  students: Student[] = [
    {
      id: 1,
      name: 'Adithya',
      email: 'adithya@gmail.com',
      department: 'IT',
      age: 22
    },
    {
      id: 2,
      name: 'Ravi',
      email: 'ravi@gmail.com',
      department: 'CSE',
      age: 21
    },
    {
      id: 3,
      name: 'Kiran',
      email: 'kiran@gmail.com',
      department: 'ECE',
      age: 23
    }
  ];


  getStudents() {

    return this.students;

  }


  addStudent(student: Student) {

    student.id = this.students.length + 1;

    this.students.push(student);

  }

  getStudentById(id: number) {

    return this.students.find(student => student.id === id);

  }



  updateStudent(updatedStudent: Student) {


    const index =
      this.students.findIndex(
        student => student.id === updatedStudent.id
      );


    if (index !== -1) {

      this.students[index] = updatedStudent;

    }


  }
  deleteStudent(id: number) {

    this.students =
      this.students.filter(
        student => student.id !== id
      );

  }


}