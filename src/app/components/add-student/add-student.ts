import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {

  studentForm;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {

    this.studentForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      department: ['', Validators.required],

      age: ['', Validators.required]

    });

  }


  saveStudent(): void {

    if (this.studentForm.valid) {

      const student = {

        id: 0,

        name: this.studentForm.value.name!,

        email: this.studentForm.value.email!,

        department: this.studentForm.value.department!,

        age: Number(this.studentForm.value.age!)

      };


      this.studentService.addStudent(student);

      alert("Student Added Successfully");

      this.studentForm.reset();

    }

  }

}