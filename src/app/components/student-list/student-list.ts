import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: Student[] = [];
  constructor(private studentService: StudentService) {


  }


  ngOnInit() {

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

  deleteStudent(id: number) {

    const confirmDelete =
      confirm("Are you sure you want to delete?");


    if (confirmDelete) {

      this.studentService.deleteStudent(id);

      this.students =
        this.studentService.getStudents();

    }

  }

}