import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {
  students: Student[] = [
    { id: 1, name: 'Adithya', email: 'adithya@gmail.com', department: 'IT', age: 22 },
    { id: 2, name: 'Ravi', email: 'ravi@gmail.com', department: 'CSE', age: 21 },
    { id: 3, name: 'Kiran', email: 'kiran@gmail.com', department: 'ECE', age: 23 }
  ];
}