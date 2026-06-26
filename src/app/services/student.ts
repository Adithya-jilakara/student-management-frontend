import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(): Student[] {
    return [
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
  }

}