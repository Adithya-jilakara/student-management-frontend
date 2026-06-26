import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  searchText = '';

get filteredStudents(): Student[] {
  return this.students.filter(student =>
    student.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    student.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
    student.department.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

}