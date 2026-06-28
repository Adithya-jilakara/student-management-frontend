import { Component } from '@angular/core';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {


  totalStudents = 0;


  constructor(
    private studentService: StudentService
  ) { }


  ngOnInit() {

    this.totalStudents =
      this.studentService.getStudents().length;

  }


}